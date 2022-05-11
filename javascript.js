let userPlay = window.prompt("Rock, Paper or Scissors?");// The user will input their selection and it will display the user input.

let word = ['Rock', 'Paper', 'Scissors']; //The list of variable the computer will select from.

function computerPlay(){
    return word[Math.floor(Math.random()*word.length)];// This is the computer selection
}
    function playRound(playerSelection, computerSelection) {
        if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            return "You won! " + playerSelection + ' beats ' + computerSelection;
        } else if ((computerSelection == 'rock' && playerSelection == 'scissors') || 
        (computerSelection == 'scissors' && playerSelection == 'paper') || 
        (computerSelection == 'paper' && playerSelection == 'rock')) {
            return "You lose! " + computerSelection + ' beats ' + playerSelection
        } else if (computerSelection == playerSelection) {
            return "Tie game."
        }
        else {
            return userPlay + " is invalid. Input Rock, Paper or scissors"
        }
    };

    playerSelection = userPlay.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));

function game(){
    playRound(playerSelection, computerSelection)
    for (let i = 0; i < 5; i++){
        
    }
}