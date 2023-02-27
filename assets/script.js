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
let correct = document.querySelector('#correct');
let incorrect = document.querySelector('#incorrect');
let playerScore = document.querySelector('#playerScore');

//gives startBtn functionality
startBtn.addEventListener('click', startGame);
function startGame() {
    infoBox.style.display = 'none';
    questionBox.style.display = 'block';
    playerScore = 0; //makes sure score starts at 0
    newQuestions();
    countDown();
    checkAnwer();
    playerScore++; // clicking starts gives negative score, this sets score back to 0
}

//thank you Mikhail on stackoverflow, this is for the countdown timer
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
        `<li>${quizQuestions[i].choices[0]}</li>
        <li>${quizQuestions[i].choices[1]}</li>
        <li>${quizQuestions[i].choices[2]}</li>
        <li>${quizQuestions[i].choices[3]}</li>`
}

//function to check if chosen answer is correct or incorrect
function checkAnwer() {
    //gives element user clicked, thanks alex on stackoverflow
    document.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        clickedAnswer = target.textContent || target.innerText;
        console.log(clickedAnswer)
        //compares clicked element to correct answer
        if (clickedAnswer == quizQuestions[i].answer) {
            console.log("correct");
            playerScore++;
        } else {
            console.log("incorrect");
            playerScore--;
        }
        console.log(playerScore);
    }, false);
}



