console.log("Hello World!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);

    let computerSelection;

    if (choice == 1) {
        computerSelection = "rock";
    } else if (choice == 2) {
        computerSelection = "paper";
    } else if (choice == 3) {
        computerSelection = "scissors";
    }
    console.log("Computer: " + computerSelection);
}

getComputerChoice();

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();

    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        playerSelection = prompt("You have entered an invalid string. Please enter Rock, Paper, or Scissors:");
        playerSelection = playerSelection.toLowerCase();
    }
    console.log("Player: " + playerSelection);
}

getPlayerChoice();

function playRound(playerSelection, computerSelection) {

}