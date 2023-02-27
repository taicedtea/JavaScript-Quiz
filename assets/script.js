//Imports questions from questions file
import { quizQuestions } from "./questions.js";

// Assign variables
let timer = document.querySelector('#timer');
let highScoreBtn = document.querySelector('#startBtn');
let infoBox = document.querySelector('#infoBox');
let startBtn = document.querySelector('#startBtn');
let questionBox = document.querySelector('#questionBox');
let question = document.querySelector('#question');
let answerList = document.querySelector('#answerList');
let endBox = document.querySelector('#endBox');
let playerScore = document.querySelector('#playerScore');

//gives startBtn functionality
startBtn.addEventListener('click', startGame);
function startGame() {
    infoBox.style.display = 'none';
    questionBox.style.display = 'block';
    playerScore = 0; //makes sure score starts at 0
    newQuestions();
    countDown();
}

//thank you Mikhail on stackoverflow
function countDown(){
    var sec = 45;
    setInterval(function(){
        timer.innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

var i = 0 //to set question to first in index

// populates question box
function newQuestions() {
    question.innerHTML = quizQuestions[i].question;
    answerList.innerHTML = 
        `<li>1. ${quizQuestions[i].choices[0]}</li>
        <li>2. ${quizQuestions[i].choices[1]}</li>
        <li>3. ${quizQuestions[i].choices[2]}</li>
        <li>4. ${quizQuestions[i].choices[3]}</li>` 
}

