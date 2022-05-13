let userName = window.prompt("What is your name?") // The user will input a name.

let word = ['Rock', 'Paper', 'Scissors']; //The list of variable the computer will select from.

function computerPlay() {
    return word[Math.floor(Math.random()*word.length)];// This is the computer selection
}
    function playRound(playerSelection, computerSelection) {
        if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerScore++;
            return "You won! " + playerSelection + ' beats ' + computerSelection;
        } else if ((computerSelection == 'rock' && playerSelection == 'scissors') || 
        (computerSelection == 'scissors' && playerSelection == 'paper') || 
        (computerSelection == 'paper' && playerSelection == 'rock')) {
            computerScore++;
            return "You lose! " + computerSelection + ' beats ' + playerSelection
        } else if (computerSelection == playerSelection) {
            return "Tie game."
        }
        else {
             console.log(playerSelection + " is invalid. Input Rock, Paper or scissors")
        }
    }; //This function will decide who wins in each rounds.

    playerScore = 0;
    computerScore = 0;

function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();// The user will input their selection and it will display the user input.
        computerSelection = computerPlay().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    }
    if (computerScore > playerScore) {
        alert("Computer won " + computerScore + " - " + playerScore)
    } else if (playerScore > computerScore) {
        alert(userName + " won " + playerScore + " - " + computerScore)
    }
    else {
        alert("Better luck next time, it is a  tie game " + playerScore + " - " + computerScore)
    }
} //This function will play 5 rounds and determine the winner
game();