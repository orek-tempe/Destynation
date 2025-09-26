
import { } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js';

// The firebaseConfig variable MUST be defined in firebase-config.js before this script runs.
// It should be the object provided by Firebase Console when you register a web app.

if (typeof firebaseConfig === 'undefined') {
  alert('firebase-config.js belum diisi. Buka firebase-config.js dan paste konfigurasi Firebase Anda terlebih dahulu.');
  throw new Error('firebase-config missing');
}

// initialize
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const QUESTIONS = [
  {q:"Ibukota Indonesia?", options:["Jakarta","Surabaya","Bandung","Medan"], answer:0},
  {q:"Pulau terbesar di Indonesia?", options:["Sumatra","Jawa","Borneo","Sulawesi"], answer:2},
  {q:"Pahlawan kemerdekaan dengan julukan 'Bapak Proklamator'?", options:["Soekarno","Hatta","Sudirman","Kartini"], answer:0},
  {q:"Buah khas Bali?", options:["Durian","Salak","Mangga","Pisang"], answer:1},
  {q:"Hewan endemik Sulawesi?", options:["Orangutan","Anoa","Komodo","Badak"], answer:1},
  {q:"Tumbuhan penghasil minyak atsiri di Indonesia?", options:["Cengkeh","Mangga","Jagung","Lada"], answer:0},
  {q:"Hewan terbesar di Indonesia?", options:["Gajah Sumatra","Komodo","Badak Jawa","Harimau Sumatra"], answer:0},
  {q:"Pulau di ujung timur Indonesia?", options:["Bali","Sumba","Papua","Timor"], answer:2},
  {q:"Pahlawan wanita dari Aceh?", options:["Cut Nyak Dhien","Kartini","Martha Christina","Siti Hartinah"], answer:0},
  {q:"Buah tropis berkulit berduri?", options:["Durian","Nanas","Mangga","Salak"], answer:0},
  // (Add questions up to 50 as needed)
];

// UI
const loginScreen = document.getElementById('login-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('startBtn');
const playerNameInput = document.getElementById('playerName');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const finalText = document.getElementById('finalText');
const leaderboardOl = document.getElementById('leaderboard');
const playAgainBtn = document.getElementById('playAgain');
const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');

let playerName = '';
let shuffled = [];
let current = 0;
let score = 0;
let perQuestionTime = 45; // seconds
let questionTimer = null;
let remaining = perQuestionTime;
let totalAnswerTime = 0; // sum of time taken to answer (for tie-breaker)
let questionStartTs = 0;

function shuffle(a){ return a.slice().sort(()=>0.5 - Math.random()); }

startBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim() || 'Player';
  playerName = name;
  localStorage.setItem('playerName', playerName);
  beginGame();
});

playAgainBtn.addEventListener('click', () => {
  location.reload();
});

function beginGame(){
  loginScreen.classList.add('hidden');
  endScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  // prepare questions
  shuffled = shuffle(QUESTIONS).slice(0,50);
  current = 0;
  score = 0;
  totalAnswerTime = 0;
  scoreEl.textContent = 'Score: 0';
  showQuestion();
}

function showQuestion(){
  // reset
  nextBtn.classList.add('hidden');
  optionsEl.innerHTML = '';
  if(current >= shuffled.length){
    finishGame();
    return;
  }
  const q = shuffled[current];
  questionEl.textContent = `Pertanyaan ${current+1}: ${q.q}`;
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => { selectAnswer(idx); };
    optionsEl.appendChild(btn);
  });
  // start per-question timer
  remaining = perQuestionTime;
  updateTimerDisplay();
  questionStartTs = Date.now();
  if(questionTimer) clearInterval(questionTimer);
  questionTimer = setInterval(() => {
    remaining--;
    updateTimerDisplay();
    if(remaining <= 0){
      clearInterval(questionTimer);
      // time up: count as wrong and move next
      soundWrong.play().catch(()=>{});
      // add full perQuestionTime to totalAnswerTime as penalty (optional choose to add perQuestionTime)
      totalAnswerTime += perQuestionTime;
      Array.from(optionsEl.children).forEach(b => b.disabled = true);
      nextBtn.classList.remove('hidden');
    }
  }, 1000);
}

function updateTimerDisplay(){
  const mm = Math.floor(remaining/60).toString().padStart(2,'0');
  const ss = (remaining%60).toString().padStart(2,'0');
  timerEl.textContent = `Waktu: ${mm}:${ss}`;
}

function selectAnswer(idx){
  if(questionTimer) clearInterval(questionTimer);
  const q = shuffled[current];
  const correct = q.answer;
  const answeredAt = Date.now();
  const timeTaken = Math.round((answeredAt - questionStartTs)/1000);
  totalAnswerTime += timeTaken;
  if(idx === correct){
    score += 2;
    scoreEl.textContent = 'Score: ' + score;
    soundCorrect.play().catch(()=>{});
  } else {
    soundWrong.play().catch(()=>{});
  }
  // disable options
  Array.from(optionsEl.children).forEach(b => b.disabled = true);
  nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', ()=>{
  current++;
  showQuestion();
});

// finish
async function finishGame(){
  if(questionTimer) clearInterval(questionTimer);
  gameScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');
  finalText.textContent = `Player: ${playerName} — Score: ${score} — Total waktu jawab: ${totalAnswerTime}s`;
  // save to Firestore
  try {
    await db.collection('leaderboard').add({
      name: playerName,
      score: score,
      time: totalAnswerTime,
      ts: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (e){
    console.error('Gagal simpan ke Firestore:', e);
  }
  // update leaderboard display
  renderLeaderboard();
}

async function renderLeaderboard(){
  leaderboardOl.innerHTML = '<li class="small">Memuat...</li>';
  try {
    // order by score desc then time asc
    const snapshot = await db.collection('leaderboard')
      .orderBy('score','desc')
      .orderBy('time','asc')
      .limit(5)
      .get();
    leaderboardOl.innerHTML = '';
    snapshot.forEach(doc => {
      const d = doc.data();
      const li = document.createElement('li');
      li.textContent = `${d.name} — ${d.score} pts — ${d.time || 0}s`;
      leaderboardOl.appendChild(li);
    });
  } catch (e){
    console.error('Gagal ambil leaderboard:', e);
    leaderboardOl.innerHTML = '<li class="small">Tidak dapat memuat leaderboard (cek konfigurasi Firebase/Firestore).</li>';
  }
}

// on load, show any stored name
window.addEventListener('load', ()=>{
  const stored = localStorage.getItem('playerName');
  if(stored) playerNameInput.value = stored;
  // show leaderboard on load too
  renderLeaderboard();
});
