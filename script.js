
const buttons = document.querySelectorAll('button');
const playScore = document.querySelector('.playScore');
const compScore = document.querySelector('.compScore');
const playSel = document.querySelector('.playSel');
const compSel = document.querySelector('.compSel');
const results = document.querySelector('.results');
const container = document.querySelector('#container');
let playerScore = 0;
let computerScore = 0;

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

    compSel.textContent = "Computer: " + computerSelection;

    return computerSelection;
}

// function to capitalize first letter

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to play one round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (`You tied! You both chose ${playerSelection}!`);
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return (`You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`);
        } else if (computerSelection === "paper") {
            return (`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return (`You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`);
        } else if (computerSelection === "scissors") {
            return (`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return (`You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`);
        } else if (computerSelection === "rock") {
            return (`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`);
        }
    }   
}

// function to start new game

function startNewGame() {
    const newGame = document.createElement('button');
    newGame.textContent = "Play Again";
    container.appendChild(newGame);

    newGame.addEventListener('click', () => {
        const finalResult = document.querySelector('.final');
        playerScore = 0;
        computerScore = 0;
        
        playScore.textContent = "Player Score: " + playerScore;
        compScore.textContent = "Computer Score: " + computerScore;
        playSel.textContent = '';
        compSel.textContent = '';
        results.textContent = '';
        container.removeChild(finalResult);
        container.removeChild(newGame);

        buttons.forEach(button => button.disabled = false);
    })
}

function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            let playerSelection = e.target.id;
            playSel.textContent = "Player: " + playerSelection;
            
            let roundWinner = playRound(playerSelection, getComputerChoice());
            results.textContent = roundWinner;

            if (roundWinner.slice(0, 8) == "You lose") {
                computerScore++;
            } else if (roundWinner.slice(0, 7) == "You win") {
                playerScore++;
            }

            playScore.textContent = "Player Score: " + playerScore;
            compScore.textContent = "Computer Score: " + computerScore;

            const finalResult = document.createElement('div');
            finalResult.classList.add("final");

            if (computerScore == 5) {
                finalResult.textContent = "THE COMPUTER IS THE FINAL WINNER!";
                container.appendChild(finalResult);
                buttons.forEach(button => button.disabled = true);
                startNewGame();
            } else if (playerScore == 5) {
                finalResult.textContent = "YOU ARE THE FINAL WINNER!";
                container.appendChild(finalResult);
                buttons.forEach(button => button.disabled = true);
                startNewGame();
            }
        });
    });
}


playScore.textContent = "Player Score: " + playerScore;
compScore.textContent = "Computer Score: " + computerScore;

game();