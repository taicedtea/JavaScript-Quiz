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
}

function newQuestions() {

}

