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

// function to play one round

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let result = "You tied!";
        return result;
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            let result = "You win!";
            return result;
        } else if (computerSelection == "paper") {
            let result = "You lose!";
            return result;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            let result = "You win!";
            return result;
        } else if (computerSelection == "scissors") {
            let result = "You lose!";
            return result;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            let result = "You win!";
            return result;
        } else if (computerSelection == "rock") {
            let result = "You lose!";
            return result;
        }
    }
}

// function to play best 3 out of 5

function game() {
    let computerScore = 0;
    let playerScore = 0;
    while (computerScore < 3 && playerScore < 3) {
    
        let score = playRound(getPlayerChoice(), getComputerChoice());
        console.log(score);
        
        if (score == "You lose!") {
            computerScore++;
        } else if (score == "You win!") {
            playerScore++;
        }

        console.log("Computer score: " + computerScore);
        console.log("Player score: " + playerScore);
    }

    if (computerScore == 3) {
        let winner = "THE COMPUTER WINS!";
        return winner;
    } else if (playerScore == 3) {
        let winner = "YOU WIN!";
        return winner;
    }
}

console.log(game());


