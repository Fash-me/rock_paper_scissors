let userName;
let word;
let playerScore;
let computerScore;


userName = window.prompt("What is your name?").toUpperCase() // The user will input a name.

const wcPlayer = document.querySelector('#wc-Player');
const restartGame = document.querySelector('#restart-game');
const nextPlayer = document.querySelector('#next-player');
const declareWinner = document.querySelector('#declearin-winner')
const showPopUp = document.querySelector("#pop-up")
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

wcPlayer.innerText = `WELCOME ${userName} `;

word = ['Rock', 'Paper', 'Scissors']; //The list of variable the computer will select from.

function computerPlay() {
    return word[Math.floor(Math.random()*word.length)];// This is the computer selection
}

playerScore = 0;
computerScore = 0;

restartGame.addEventListener("click", restart);
function restart() {
    window.location.reload();
}

nextPlayer.addEventListener("click", restart);
function restart() {
    window.location.reload();
} // This function will restart the game at any point

function playerPopUp() {
    declareWinner.innerText = `Alright, ${userName} you are my master. You won the game but that won't stop me from taking over the world ha-ha`
    showPopUp.showModal();

}// //This function will show and display player message in the pop-up

function computerPopUp() {
    declareWinner.innerText = `I told you I was going to take over the world. Now I will start by defeating every player in this game ha-ha`
    showPopUp.showModal();

}; //This function will show and display computer message in the pop-up

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore++;
        document.querySelector('#comment').innerText = `You won this round ${userName}, the next round will be mine.`;
    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') || 
    (computerSelection == 'scissors' && playerSelection == 'paper') || 
    (computerSelection == 'paper' && playerSelection == 'rock')) {
        computerScore++;
        document.querySelector('#comment').innerText = `I won this round, I am about to take over the world.`;
    } else {
        document.querySelector('#comment').innerText = "It is tie, you think you are tough ehn";
    }

    if (playerScore == 5) {
        playerPopUp()
    } else if (computerScore == 5) {
        computerPopUp()
    }

    document.querySelector('#com-play').innerText = `Computer played ${computerSelection}`;
    document.querySelector('#ply-score').innerText = `${userName} SCORE =  ${playerScore}`;
    document.querySelector('#com-score').innerText = `COMPUTER SCORE =  ${computerScore}`;
}; //This function will decide who wins in each rounds and declare the winner.

rockBtn.addEventListener("click", rock);
function rock() {
    playerSelection = "rock";
    computerSelection = computerPlay().toLowerCase();
    playRound(playerSelection, computerSelection);
}; //The function for the rock click

paperBtn.addEventListener("click", paper);
function paper(playerSelection, computerSelection) {
    playerSelection = "paper"
    computerSelection = computerPlay().toLowerCase();
    playRound(playerSelection, computerSelection);
}; //The function for the paper click

scissorsBtn.addEventListener("click", scissorsPlayRound);
function scissorsPlayRound(playerSelection, computerSelection) {
    playerSelection = "scissors"
    computerSelection = computerPlay().toLowerCase();
    playRound(playerSelection, computerSelection);
}; //The function for the scissors click
