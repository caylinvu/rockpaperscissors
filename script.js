function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    //console.log(choice);

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

//getComputerChoice();

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

//getPlayerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let result = "You tied!";
        console.log(result);
        return result;
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            let result = "You win! Rock beats scissors!";
            console.log(result);
            return result;
        } else if (computerSelection == "paper") {
            let result = "You lose! Paper beats rock!";
            console.log(result);
            return result;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            let result = "You win! Paper beats rock!";
            console.log(result);
            return result;
        } else if (computerSelection == "scissors") {
            let result = "You lose! Scissors beats paper!";
            console.log(result);
            return result;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            let result = "You win! Scissors beats paper!";
            console.log(result);
            return result;
        } else if (computerSelection == "rock") {
            let result = "You lose! Rock beats scissors!";
            console.log(result);
            return result;
        }
    }
}

playRound(getPlayerChoice(), getComputerChoice());

//console.log("Player: " + playerSelection);
//console.log("Computer: " + computerSelection);
