let userPlay = window.prompt("Rock, Paper or Scissors?");
console.log(userPlay); // The user will input their selection and it will display the user input.

let word = ['Rock', 'Paper', 'Scissors']; //The list of variable the computer will select from.

    let result = word[Math.floor(Math.random()*word.length)];
    console.log(result); // This is the computer selection
    
    function playRound(playerSelection, computerSelection) {
        playerSelection = userPlay.toLowerCase();
        computerSelection = result.toLowerCase();
        if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            console.log("You won! " + playerSelection + ' beats ' + computerSelection);
        } else if ((computerSelection == 'rock' && playerSelection == 'scissors') || 
        (computerSelection == 'scissors' && playerSelection == 'paper') || 
        (computerSelection == 'paper' && playerSelection == 'rock')) {
            console.log("You lose! " + computerSelection + ' beats ' + playerSelection)
        } else if (computerSelection == playerSelection) {
            console.log("Tie game.")
        }
        else {
            console.log(userPlay + " is invalid. Input Rock, Paper or scissors")
        }
    };
    
    playRound(result, userPlay);