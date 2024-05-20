document.getElementById('start-button').addEventListener('click', startQuiz)

const questionView = document.getElementById('question-view');
const endView = document.getElementById('end-view');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const counter = document.getElementById('timer');
const finalScore = document.getElementById('final-score');
const initials = document.getElementById('initials');

let timer;
let timeLeft = 60;
let questionIndex = 0;
let score = 0;


const quizQuestions = [

    {
        question : "What is JavaScript?",
        options: ["a. A software", "b. A variable", "c. A programming language that adds interactivity to a webpage"],
        answer: question1.options[2],
    },
    
    {
        question : "What is var used for?",
        options : ["a. To declare a variable", "b. to add style in css", "c. it has no functionality"],
        answer : question2.options[0],
    },
    
    {
        question : "What does CSS stand for?",
        options : ["Calling of the style sirens", "b. Cheese street style", "Cascading Style Sheets"],
        answer : question3.options[2],
    },
    
];

function startQuiz() {
    document.getElementById('start').classList.add('hide');
    questionView.classList.remove('hide');
    timer = setInterval(updateTimer, 1000);
    showQuiz();
}
function updateTimer() {
    timeLeft ;
    counter.textContent = timeLeft;
    if (timeLeft <= 0){
        finishQuiz();
    }
}

function showQuiz() {
    if (questionIndex >= quizQuestions.length) {
        finishQuiz();
        return;
    }

const 
    
}