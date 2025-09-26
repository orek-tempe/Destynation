
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
  // tambahkan hingga 50 pertanyaan sesuai kebutuhan
];

// UI elements
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
const localScoresOl = document.getElementById('localScores');
const playAgainBtn = document.getElementById('playAgain');
const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');

let playerName = '';
let shuffled = [];
let current = 0;
let score = 0;
let perQuestionTime = 45;
let questionTimer = null;
let remaining = perQuestionTime;
let questionStartTs = 0;
let totalAnswerTime = 0; // seconds total taken to answer

function shuffle(a){ return a.slice().sort(()=>0.5 - Math.random()); }

startBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim() || 'Player';
  playerName = name;
  localStorage.setItem('playerName', playerName);
  beginGame();
});

playAgainBtn.addEventListener('click', ()=>{ location.reload(); });

function beginGame(){
  loginScreen.classList.add('hidden');
  endScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  shuffled = shuffle(QUESTIONS).slice(0,50);
  current = 0;
  score = 0;
  totalAnswerTime = 0;
  scoreEl.textContent = 'Score: 0';
  showQuestion();
}

function showQuestion(){
  nextBtn.classList.add('hidden');
  optionsEl.innerHTML = '';
  if(current >= shuffled.length){
    finishGame();
    return;
  }
  const q = shuffled[current];
  questionEl.textContent = `Pertanyaan ${current+1}: ${q.q}`;
  q.options.forEach((opt, idx)=>{
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = ()=> selectAnswer(idx);
    optionsEl.appendChild(btn);
  });
  remaining = perQuestionTime;
  updateTimerDisplay();
  questionStartTs = Date.now();
  if(questionTimer) clearInterval(questionTimer);
  questionTimer = setInterval(()=>{
    remaining--;
    updateTimerDisplay();
    if(remaining <= 0){
      clearInterval(questionTimer);
      // time up -> wrong, move next but show next button
      try{ soundWrong.play(); }catch(e){}
      totalAnswerTime += perQuestionTime;
      Array.from(optionsEl.children).forEach(b=> b.disabled = true);
      nextBtn.classList.remove('hidden');
    }
  },1000);
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
    try{ soundCorrect.play(); }catch(e){}
  } else {
    try{ soundWrong.play(); }catch(e){}
  }
  Array.from(optionsEl.children).forEach(b=> b.disabled = true);
  nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', ()=>{
  current++;
  showQuestion();
});

function finishGame(){
  if(questionTimer) clearInterval(questionTimer);
  gameScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');
  finalText.textContent = `Player: ${playerName} — Score: ${score} — Total waktu jawab: ${totalAnswerTime}s`;
  saveLocalScore(playerName, score, totalAnswerTime);
  renderLocalScores(playerName);
}

function saveLocalScore(name, scoreVal, timeVal){
  const key = 'tebaknama_scores_' + name;
  let arr = JSON.parse(localStorage.getItem(key) || '[]');
  arr.unshift({score: scoreVal, time: timeVal, ts: Date.now()});
  // keep only latest 20 entries
  arr = arr.slice(0,20);
  localStorage.setItem(key, JSON.stringify(arr));
}

function renderLocalScores(name){
  const key = 'tebaknama_scores_' + name;
  let arr = JSON.parse(localStorage.getItem(key) || '[]');
  localScoresOl.innerHTML = '';
  if(arr.length === 0){
    localScoresOl.innerHTML = '<li class="small">Belum ada skor.</li>';
    return;
  }
  arr.forEach(item=>{
    const d = new Date(item.ts);
    const li = document.createElement('li');
    li.textContent = `${d.toLocaleString()} — ${item.score} pts — ${item.time}s`;
    localScoresOl.appendChild(li);
  });
}

// load stored name
window.addEventListener('load', ()=>{
  const stored = localStorage.getItem('playerName');
  if(stored) playerNameInput.value = stored;
});
