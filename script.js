const QUESTIONS = [{"q": "Siapakah pahlawan proklamator Indonesia yang memproklamasikan kemerdekaan pada 17 Agustus 1945?", "options": ["Soekarno", "Mohammad Hatta", "Sudirman", "Sutan Sjahrir"], "answer": 0}, {"q": "Tumbuhan apa yang menjadi simbol produksi rempah terbesar di Maluku pada masa kolonial?", "options": ["Cengkeh", "Padi", "Kapas", "Kakao"], "answer": 0}, {"q": "Hewan endemik Pulau Komodo yang terkenal di Indonesia adalah?", "options": ["Komodo", "Anoa", "Orangutan", "Rusa"], "answer": 0}, {"q": "Nama tari tradisional dari Bali yang sering tampil dalam upacara keagamaan:", "options": ["Kecak", "Jaipong", "Saman", "Reog"], "answer": 0}, {"q": "Pakaian tradisional khas Jawa yang sering digunakan untuk acara resmi:", "options": ["Ulos", "Batik", "Songket", "Tenun"], "answer": 1}, {"q": "Ibu kota Provinsi Jawa Barat adalah:", "options": ["Bandung", "Bekasi", "Bogor", "Depok"], "answer": 0}, {"q": "Pulau terbesar di Indonesia berdasarkan luas adalah:", "options": ["Sumatra", "Jawa", "Kalimantan", "Sulawesi"], "answer": 2}, {"q": "Objek wisata Candi Borobudur terletak di provinsi:", "options": ["Jawa Tengah", "DI Yogyakarta", "Jawa Barat", "Jawa Timur"], "answer": 0}, {"q": "Produk unggulan daerah yang terkenal dari Indonesia: kopi jenis asal Aceh dikenal sebagai:", "options": ["Kopi Toraja", "Kopi Gayo", "Kopi Luwak", "Kopi Lampung"], "answer": 1}, {"q": "Pahlawan wanita asal Aceh yang memimpin perlawanan melawan Belanda:", "options": ["Cut Nyak Dhien", "Kartini", "Nyi Ageng Serang", "Cut Nyak Meutia"], "answer": 0}, {"q": "Tumbuhan berbuah yang populer di Indonesia, dikenal sebagai 'raja buah':", "options": ["Nanas", "Durian", "Mangga", "Rambutan"], "answer": 1}, {"q": "Hewan yang menjadi simbol nasional Indonesia (fauna):", "options": ["Garuda", "Komodo", "Gajah", "Harimau"], "answer": 0}, {"q": "Nama tari tradisional dari Aceh yang terkenal:", "options": ["Saman", "Jaipong", "Kecak", "Pendet"], "answer": 0}, {"q": "Pakaian adat dari Sumatera Utara yang terkenal disebut:", "options": ["Ulos", "Batik", "Kebaya", "Tapis"], "answer": 0}, {"q": "Ibu kota Provinsi Papua adalah:", "options": ["Jayapura", "Manokwari", "Sorong", "Timika"], "answer": 0}, {"q": "Pulau yang menjadi tujuan wisata untuk melihat Komodo adalah:", "options": ["Pulau Komodo", "Pulau Bali", "Pulau Jawa", "Pulau Lombok"], "answer": 0}, {"q": "Objek wisata pantai yang terkenal di Bali:", "options": ["Kuta", "Parangtritis", "Pandak", "Anyer"], "answer": 0}, {"q": "Produk hasil laut Indonesia yang diekspor besar-besaran:", "options": ["Garam", "Udang", "Salmon", "Kaviar"], "answer": 1}, {"q": "Pahlawan yang dikenal sebagai panglima besar dan terkenal dari Jawa Tengah:", "options": ["Jenderal Sudirman", "Pangeran Diponegoro", "Sultan Hasanuddin", "Teuku Umar"], "answer": 1}, {"q": "Tumbuhan yang daunnya digunakan untuk membuat minuman tradisional 'daun sirih' adalah:", "options": ["Sirih", "Teh", "Kopi", "Sambiloto"], "answer": 0}, {"q": "Hewan primata yang hidup di pulau Kalimantan:", "options": ["Orangutan Borneo", "Orangutan Sumatra", "Gorilla", "Simia"], "answer": 0}, {"q": "Seni tari tradisional dari Jawa Barat yang terkenal enerjik:", "options": ["Jaipong", "Saman", "Kecak", "Reog"], "answer": 0}, {"q": "Busana tradisional yang biasa dipakai perempuan Indonesia untuk acara resmi modern:", "options": ["Kimono", "Kebaya", "Hanbok", "Ao Dai"], "answer": 1}, {"q": "Ibu kota Provinsi Bali adalah:", "options": ["Denpasar", "Ubud", "Kuta", "Singaraja"], "answer": 0}, {"q": "Pulau yang terkenal dengan danau alami Toba:", "options": ["Pulau Samosir", "Pulau Bali", "Pulau Lombok", "Pulau Sulawesi"], "answer": 0}, {"q": "Objek wisata di Jawa Timur yang terkenal dengan kawah aktif dan sunrise:", "options": ["Gunung Bromo", "Rinjani", "Semeru", "Ijen"], "answer": 0}, {"q": "Produk kerajinan terkenal dari Yogyakarta:", "options": ["Batik", "Kopi", "Minyak Atsiri", "Karet"], "answer": 0}, {"q": "Pahlawan yang berasal dari Sulawesi yang memerangi penjajah:", "options": ["Sam Ratulangi", "Sultan Hasanuddin", "Cut Nyak Dhien", "Teuku Umar"], "answer": 1}, {"q": "Tumbuhan yang menjadi sumber minyak atsiri berupa cengkeh banyak ditanam di:", "options": ["Maluku", "Jawa", "Sumatra", "Kalimantan"], "answer": 0}, {"q": "Hewan khas Papua yang berkaki dua dan hidup di hutan:", "options": ["Kaswari (Cenderawasih)", "Komodo", "Kuskus", "Kangguru"], "answer": 0}, {"q": "Tari tradisional dari Sulawesi Selatan yang terkenal:", "options": ["Pakarena", "Pendet", "Saman", "Kecak"], "answer": 0}, {"q": "Pakaian adat tradisional dari Nusa Tenggara Timur sering disebut:", "options": ["Ikat Tenun", "Batik", "Ulos", "Songket"], "answer": 0}, {"q": "Ibu kota Provinsi Sumatra Utara adalah:", "options": ["Medan", "Padang", "Pekanbaru", "Palembang"], "answer": 0}, {"q": "Pulau yang terkenal dengan kebun teh perkebunan Tinggi di Jawa Barat:", "options": ["Pulau Jawa", "Pulau Sumatra", "Pulau Bali", "Pulau Lombok"], "answer": 0}, {"q": "Objek wisata bawah laut terkenal di Raja Ampat terletak di provinsi:", "options": ["Papua Barat", "Maluku", "Bali", "Sulawesi"], "answer": 0}, {"q": "Produk hasil pertanian ekspor dari Indonesia, terkenal:", "options": ["Kopi", "Wheat", "Corn", "Soy"], "answer": 0}, {"q": "Pahlawan wanita yang memperjuangkan pendidikan perempuan di Indonesia:", "options": ["R.A. Kartini", "Cut Nyak Dhien", "Siti Hartinah", "Maria Walanda Maramis"], "answer": 0}, {"q": "Tumbuhan yang menghasilkan buah salak banyak dibudidayakan di:", "options": ["Yogyakarta", "Aceh", "Papua", "Kalimantan"], "answer": 0}, {"q": "Binatang yang menjadi ikon kota Bandung adalah:", "options": ["Kuda", "Singa", "Gajah", "Harimau"], "answer": 0}, {"q": "Tarian tradisional dari Bali yang sering berkaitan dengan ritual penyucian:", "options": ["Pendet", "Jaipong", "Saman", "Reog"], "answer": 0}, {"q": "Pakaian adat Betawi yang khas sering digunakan di Jakarta:", "options": ["Baju Sadariah/Laksmana", "Kebaya", "Batik", "Ulos"], "answer": 0}, {"q": "Ibu kota Provinsi Kalimantan Timur adalah:", "options": ["Samarinda", "Balikpapan", "Bontang", "Tarakan"], "answer": 0}, {"q": "Pulau di Nusa Tenggara Barat yang terkenal dengan kincir angin dan pantai:", "options": ["Lombok", "Sumba", "Sumbawa", "Flores"], "answer": 0}, {"q": "Objek wisata di Sumatra Barat terkenal dengan rumah gadang dan budaya Minang:", "options": ["Bukittinggi", "Banda Aceh", "Medan", "Padang"], "answer": 0}, {"q": "Produk ekspor unggulan Indonesia berupa rempah yang sering digunakan di dunia:", "options": ["Cengkeh", "Vanilla", "Saffron", "Peppercorn"], "answer": 0}, {"q": "Pahlawan nasional yang berasal dari Jawa Timur:", "options": ["Bung Tomo", "Sultan Hasanuddin", "Diponegoro", "Teuku Umar"], "answer": 0}, {"q": "Tumbuhan yang menghasilkan bahan baku kain tenun tradisional adalah:", "options": ["Pohon Indigo/ Pewarna alami", "Kopi", "Karet", "Jagung"], "answer": 0}, {"q": "Hewan laut yang banyak ditemukan di perairan Indonesia dan populer di ekspor:", "options": ["Udang", "Lobster", "Salmon", "Tuna"], "answer": 0}, {"q": "Seni tari tradisional dari Sulawesi Utara yang terkenal:", "options": ["Gandrung", "Maengket", "Cakalele", "Pendet"], "answer": 2}, {"q": "Pakaian adat yang berupa kain songket umumnya berasal dari:", "options": ["Sumatra", "Jawa", "Bali", "Papua"], "answer": 0}, {"q": "Ibu kota Provinsi Nusa Tenggara Timur adalah:", "options": ["Kupang", "Kupang Lama", "Ende", "Maumere"], "answer": 0}, {"q": "Pulau yang terkenal dengan kawasan wisata Dieng terletak di:", "options": ["Jawa", "Sumatra", "Bali", "Sulawesi"], "answer": 0}, {"q": "Objek wisata terkenal berupa danau kawah di Jawa Timur:", "options": ["Kawah Ijen", "Gunung Bromo", "Danau Toba", "Ranu Kumbolo"], "answer": 0}, {"q": "Produk industri kreatif Indonesia terkenal berupa kerajinan anyaman:", "options": ["Anyaman rotan", "Keramik", "Perak", "Batik tulis"], "answer": 0}];


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
const finalText = document.getElementById('finalText');
const localScoresOl = document.getElementById('localScores');
const playAgainBtn = document.getElementById('playAgain');
const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');
const comboEl = document.getElementById('combo');

let playerName = '';
let shuffled = [];
let current = 0;
let score = 0;
let perQuestionTime = 45;
let questionTimer = null;
let remaining = perQuestionTime;
let questionStartTs = 0;
let totalAnswerTime = 0; // seconds total taken to answer
let autoNextDelay = 1200; // ms delay before moving to next after showing correct/wrong

// scoring
let comboCount = 0; // consecutive correct answers
// rules: correct +2, wrong -1, combo 3 consecutive correct -> +5 bonus (awarded once per triple and resets)

function cryptoShuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const rnd = crypto.getRandomValues(new Uint32Array(1))[0] / 0xffffffff;
    const j = Math.floor(rnd * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
  shuffled = cryptoShuffle(QUESTIONS).slice(0,50);
  current = 0;
  score = 0;
  totalAnswerTime = 0;
  comboCount = 0;
  scoreEl.textContent = 'Score: 0';
  comboEl.textContent = '';
  showQuestion();
}

function showQuestion(){
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
    btn.dataset.index = idx;
    btn.onclick = ()=> selectAnswer(idx, btn);
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
      // time up -> wrong, subtract 1, reset combo, show correct, then next
      handleWrongDueToTimeout();
    }
  },1000);
  // enable buttons
  Array.from(optionsEl.children).forEach(b=> b.disabled = false);
}

function updateTimerDisplay(){
  const mm = Math.floor(remaining/60).toString().padStart(2,'0');
  const ss = (remaining%60).toString().padStart(2,'0');
  timerEl.textContent = `Waktu: ${mm}:${ss}`;
}

function selectAnswer(idx, btn){
  if(questionTimer) clearInterval(questionTimer);
  const q = shuffled[current];
  const correct = q.answer;
  const answeredAt = Date.now();
  const timeTaken = Math.round((answeredAt - questionStartTs)/1000);
  totalAnswerTime += timeTaken;
  if(idx === correct){
    // correct
    score += 2;
    comboCount += 1;
    // if combo reaches 3, award bonus +5 and reset comboCount
    if(comboCount >= 3){
      score += 5;
      // show combo notification
      comboEl.textContent = 'COMBO x3! +5 bonus';
      // reset combo
      comboCount = 0;
      setTimeout(()=>{ comboEl.textContent = ''; }, 2000);
    } else {
      comboEl.textContent = `Combo: ${comboCount}`;
    }
    scoreEl.textContent = 'Score: ' + score;
    btn.classList.add('correct');
    try{ soundCorrect.play(); }catch(e){}
  } else {
    // wrong
    score -= 1;
    if(score < 0) score = 0;
    comboCount = 0;
    comboEl.textContent = '';
    btn.classList.add('wrong');
    revealCorrect(idx);
    try{ soundWrong.play(); }catch(e){}
    scoreEl.textContent = 'Score: ' + score;
  }
  Array.from(optionsEl.children).forEach(b=> b.disabled = true);
  setTimeout(()=>{ current++; showQuestion(); }, autoNextDelay);
}

function handleWrongDueToTimeout(){
  // treat as wrong answer
  score -= 1;
  if(score < 0) score = 0;
  comboCount = 0;
  comboEl.textContent = '';
  revealCorrect(null);
  try{ soundWrong.play(); }catch(e){}
  scoreEl.textContent = 'Score: ' + score;
  totalAnswerTime += perQuestionTime;
  Array.from(optionsEl.children).forEach(b=> b.disabled = true);
  setTimeout(()=>{ current++; showQuestion(); }, autoNextDelay);
}

function revealCorrect(selectedIdx){
  const q = shuffled[current];
  const correctIdx = q.answer;
  Array.from(optionsEl.children).forEach(b=>{
    const idx = parseInt(b.dataset.index, 10);
    if(idx === correctIdx){
      b.classList.add('correct');
    }
    if(selectedIdx !== null && idx === selectedIdx && idx !== correctIdx){
      b.classList.add('wrong');
    }
    b.disabled = true;
  });
}

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

window.addEventListener('load', ()=>{
  const stored = localStorage.getItem('playerName');
  if(stored) playerNameInput.value = stored;
});
