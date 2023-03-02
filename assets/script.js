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

let score = 0;
//gives startBtn functionality
startBtn.addEventListener('click', startGame);
function startGame() {
    infoBox.style.display = 'none';
    questionBox.style.display = 'block';
    newQuestions();
    countDown();
    checkAnswer();
}

//thank you Mikhail on stackoverflow, this is for the countdown timer
var sec = 45;
function countDown(){
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
    if (i < quizQuestions.length) {
        question.innerHTML = quizQuestions[i].question;
        answerList.innerHTML = 
        `<li>${quizQuestions[i].choices[0]}</li>
        <li>${quizQuestions[i].choices[1]}</li>
        <li>${quizQuestions[i].choices[2]}</li>
        <li>${quizQuestions[i].choices[3]}</li>`
    } else {
        console.log('done');
        questionBox.style.display = "none";
        endBox.style.display = "block";
        playerScore.innerHTML = `Your score is: ${score}!`;
    }
}

//function to check if chosen answer is correct or incorrect
function checkAnswer() {
    //gives element user clicked, thanks alex on stackoverflow
    questionBox.addEventListener('click', function(e) {
        e = window.event;
        var target = e.target,
        clickedAnswer = target.textContent;
        console.log(clickedAnswer)
        //compares clicked element to correct answer
        if (clickedAnswer === quizQuestions[i].answer) {
            console.log("correct");
            score++;
            i++;
            correct.style.display = "block";
            incorrect.style.display = "none";
            newQuestions();
            //setTimeout(correct.style.display = "none", 5000 );
        } else {
            console.log("incorrect");
            sec -= 5;
            i++;
            correct.style.display = "none";
            incorrect.style.display = "block";
            newQuestions();
        }
        console.log("score: ",score);
        console.log("i: ", i);
    }, true);
}