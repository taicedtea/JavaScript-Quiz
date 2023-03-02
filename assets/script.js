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
let submitScore = document.querySelector('#submitScore');
let playAgain = document.querySelector('#playAgain');
let highScoreBox = document.querySelector('#highScoreBox');
let highScoreList = document.querySelector('#highScoreList');

let score = 0;
var i = 0 //to set question to first in index

//gives startBtn functionality
startBtn.addEventListener('click', startGame);
function startGame() {
    i = 0;
    score = 0;
    infoBox.style.display = 'none';
    questionBox.style.display = 'block';
    newQuestions();
    countDown();
    checkAnswer();
}

// runs when timer is out or questions are done
function gameOver() {
    console.log('done');
    questionBox.style.display = "none";
    endBox.style.display = "block";
    playerScore.innerHTML = `Your score is: ${score}!`;
    i = 0;
    sec = 45;
}

//thank you Mikhail on stackoverflow, this is for the countdown timer
var sec = 20;
function countDown(){
    setInterval(function(){
        timer.innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

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
        gameOver();
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

// Allows player to submit score
submitScore.addEventListener('click', newScore);
function newScore() {
    sec = 45;
    i = 0;
    newQuestions();
    //adds highscore to element
    let name = document.getElementById('playerName').value;
    let node = document.createElement("li");
    node.innerHTML = (`<li>${name}: ${score}</li>`);
    highScoreList.appendChild(node);
    highScoreBox.style.display = "block";
    //alerts user that score was saved
    alert("Score saved! Click\"View High Score\" to View!");
    highScoreBox.style.display = "block";
    score = 0;
    console.log("i new: ", i);
    console.log("score new: ",score);
}

// Play again function
playAgain.addEventListener('click', newGame);
function newGame() {
    score = 0;
    sec = 45;
    i = 0;
    newQuestions();
    endBox.style.display = "none";
    highScoreBox.style.display = "none";
    correct.style.display = "none";
    incorrect.style.display = "none";
    questionBox.style.display = "block";
}

//view high scores
highScoreBtn.addEventListener('click', viewHighScores);
function viewHighScores() {
    highScoreBox.style.display = "block";
}