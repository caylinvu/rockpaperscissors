console.log("Hello World!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);

    let computerSelection;

    if (choice == 1) {
        computerSelection = "Rock";
    } else if (choice == 2) {
        computerSelection = "Paper";
    } else if (choice == 3) {
        computerSelection = "Scissors";
    }
    console.log(computerSelection);
}

getComputerChoice();

let playerSelection = prompt("Rock, Paper, or Scissors?");
console.log(playerSelection);

playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

