// function to get the computer's input

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if (choice == 1) {
        computerSelection = "rock";
    } else if (choice == 2) {
        computerSelection = "paper";
    } else if (choice == 3) {
        computerSelection = "scissors";
    }
    console.log("Computer: " + computerSelection);
    return computerSelection;
}

// function to get the player's input

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();

    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        playerSelection = prompt("You have entered an invalid string. Please enter Rock, Paper, or Scissors:");
        playerSelection = playerSelection.toLowerCase();
    }
    console.log("Player: " + playerSelection);
    return playerSelection;
}

// function to capitalize first letter

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to play one round

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let result = `You tied! You both chose ${playerSelection}!`;
        return result;
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            let result = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`;
            return result;
        } else if (computerSelection == "paper") {
            let result = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`;
            return result;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            let result = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`;
            return result;
        } else if (computerSelection == "scissors") {
            let result = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`;
            return result;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            let result = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`;
            return result;
        } else if (computerSelection == "rock") {
            let result = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`;
            return result;
        }
    }
}

// function to play multiple rounds - first to 5 points wins

function game() {
    let computerScore = 0;
    let playerScore = 0;
    while (computerScore < 5 && playerScore < 5) {
    
        let score = playRound(getPlayerChoice(), getComputerChoice());
        console.log(score);
        
        if (score.slice(0, 8) == "You lose") {
            computerScore++;
        } else if (score.slice(0, 7) == "You win") {
            playerScore++;
        }

        console.log("Computer score: " + computerScore);
        console.log("Player score: " + playerScore);
    }

    if (computerScore == 5) {
        let finalWinner = "THE COMPUTER IS THE FINAL WINNER!";
        return finalWinner;
    } else if (playerScore == 5) {
        let finalWinner = "YOU ARE THE FINAL WINNER!";
        return finalWinner;
    }
}

console.log(game());


