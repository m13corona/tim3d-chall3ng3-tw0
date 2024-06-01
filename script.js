
const questionView = document.getElementById('question-view');
const endView = document.getElementById('end-view');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const counter = document.getElementById('timer');
const finalScore = document.getElementById('final-score');
const initials = document.getElementById('initials');

let timer;
let timeLeft = 60;
//let questionIndex = 0;
let score = 0;


const quizQuestions = [

    {
        question : "What is JavaScript?",
        options: ["a. A software", "b. A variable", "c. A programming language that adds interactivity to a webpage"],
        correct: "c. A programming language that adds interactivity to a webpage"
    },
    
    {
        question : "What is var used for?",
        options : ["a. To declare a variable", "b. to add style in css", "c. it has no functionality"],
        correct : "a. To declare a variable"
    },
    
    {
        question : "What does CSS stand for?",
        options : ["Calling of the style sirens", "b. Cheese street style", "Cascading Style Sheets"],
        correct : "Cascading Style Sheets"
    },
    
];

function startQuiz() {
    document.getElementById('start-quiz-bttn').classList.add('hide');
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


document.getElementById('start-quiz-bttn').addEventListener('click', startQuiz)  
    

const thisQuestion = quizQuestions[questionIndex];
questionText.textContent = thisQuestion.question;
answerButtons.innerHTML = '';
thisQuestion.options.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => chooseAnswer(answer));
    answerButtons.appendChild(button);
});
    
}

function chooseAnswer(answer) {
    const thisQuestion = quizQuestions[questionIndex];
    if (answer === thisQuestion.correct) {
        score++;
    } else {
        timeLeft = -10;
    }
    questionIndex++;
    showQuiz();
}

function finishQuiz () {
    clearInterval(timer);
    questionView.classList.add();
    endView.classList.remove();
    finalScore.textContent = score;

}

initials.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerInitials = document.getElementById('initials').value;
    console.log(`Initials: ${initials}, Score: ${score}`);
    alert ("Thank you for playing!");
});