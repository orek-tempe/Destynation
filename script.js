
const questions = [
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
];
let shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0,50);
let currentQuestionIndex = 0;
let score = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
function showQuestion() {
    nextBtn.style.display = "none";
    let q = shuffledQuestions[currentQuestionIndex];
    questionEl.textContent = `Pertanyaan ${currentQuestionIndex+1}: ${q.q}`;
    optionsEl.innerHTML = '';
    q.options.forEach((option, index) => {
        let btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}
function checkAnswer(selected) {
    let correctIndex = shuffledQuestions[currentQuestionIndex].answer;
    if(selected === correctIndex) {
        score += 2;
        scoreEl.textContent = `Score: ${score}`;
        correctSound.play();
    } else {
        wrongSound.play();
    }
    Array.from(optionsEl.children).forEach(b => b.disabled = true);
    nextBtn.style.display = "block";
}
nextBtn.onclick = () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        questionEl.textContent = "Permainan selesai! Total Score: " + score;
        optionsEl.innerHTML = '';
        nextBtn.style.display = "none";
    }
}
showQuestion();
