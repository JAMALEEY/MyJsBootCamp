



const timerDisplay = document.querySelector('.display__time-left');





const quizData = [ {
    question: "Which language runs in a web browser ?",
    a : "a : Java",
    b : "b : Python",
    c : "c : C++",
    d : "d : JavaScript",
    correct : "d"
},


{
    question: "What does CSS stand for ?",
    a : "Central Style Sheets",
    b : "Cascading Style Sheets",
    c : "Css Style Sheets",
    d : "Cascading source science",
    correct : "b"
},


{
    question: "What does HTML stand for ?",
    a : "Hypertext Markup Language",
    b : "Hypertext Markdown Language",
    c : "HTML To Many Lines",
    d : "Hyperloop Machine Lnaguage",
    correct : "a"
},



{
    question: "What year was JavaScript launched ?",
    a : "1996",
    b : "1969",
    c : "1995",
    d : "1994",
    correct : "c"
},

];


// fetching the quiz element from html
const quiz = document.getElementById('quiz')
// selecting all elements of answers one by one
const answerEls = document.querySelectorAll('.answer')
// fetching the questions
const questionEl = document.getElementById('question')
// fetching the text in the answer choices
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
// fetching the button
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {


        deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
            b_text.innerText = currentQuizData.b
                c_text.innerText = currentQuizData.c
                    d_text.innerText = currentQuizData.d
}


function deselectAnswers () {
    answerEls.forEach(answerEl => answerEl.cheked = false)
}


function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    }) 
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        alert(`the correct answer is 
            ${quizData[currentQuiz].correct}
            `)

        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = ` 
            <h2> You answered correctly at ${score} / ${quizData.length} questions </h2>
            
            <button onclick = "location.reload()">Reload</button>
            `
            }
        }
})


let countdown;
timer (120)

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    countdown = setInterval(() => {
        const secondsLeft = Math.round(( then -  Date.now()) / 1000);
        // check if we should stop the interval
        if (secondsLeft < 0) {
                        // store a countdown variable
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
}