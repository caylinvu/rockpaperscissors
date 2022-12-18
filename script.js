
const buttons = document.querySelectorAll('button');
const playScore = document.querySelector('.playScore');
const compScore = document.querySelector('.compScore');
const playSel = document.querySelector('.playSel');
const compSel = document.querySelector('.compSel');
const results = document.querySelector('.results');
const container = document.querySelector('#container');
const rules = document.querySelector('.rules');
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

    compSel.textContent = "Computer: " + capitalizeFirstLetter(computerSelection);

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
            return (`You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`);
        } else if (computerSelection === "paper") {
            return (`You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return (`You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`);
        } else if (computerSelection === "scissors") {
            return (`You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return (`You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`);
        } else if (computerSelection === "rock") {
            return (`You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`);
        }
    }   
}

// function to start new game

function startNewGame() {
    const newDiv = document.createElement('newDiv');
    const newGameButton = document.createElement('button');
    newDiv.classList.add("newDiv");
    newGameButton.classList.add("newGameButton");
    newGameButton.textContent = "Play Again";
    container.appendChild(newDiv);
    newDiv.appendChild(newGameButton);

    newGameButton.addEventListener('click', () => {
        const finalResult = document.querySelector('.final');
        playerScore = 0;
        computerScore = 0;
        
        playScore.textContent = "Player Score: " + playerScore;
        compScore.textContent = "Computer Score: " + computerScore;
        playSel.textContent = '';
        compSel.textContent = '';
        results.textContent = '';
        container.removeChild(finalResult);
        newDiv.removeChild(newGameButton);

        buttons.forEach(button => button.disabled = false);
    })
}

function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            let playerSelection = e.target.classList.value;
            playSel.textContent = "Player: " + capitalizeFirstLetter(playerSelection);
            
            let roundWinner = playRound(playerSelection, getComputerChoice());
            results.textContent = roundWinner;

            if (roundWinner.slice(0, 8) == "You lost") {
                computerScore++;
            } else if (roundWinner.slice(0, 7) == "You won") {
                playerScore++;
            }

            playScore.textContent = "Player Score: " + playerScore;
            compScore.textContent = "Computer Score: " + computerScore;

            const finalResult = document.createElement('div');
            finalResult.classList.add("final");
        
            if (computerScore == 5) {
                finalResult.textContent = "BOO, THE COMPUTER BEAT YOU!!!";
                container.appendChild(finalResult);
                buttons.forEach(button => button.disabled = true);
                startNewGame();
            } else if (playerScore == 5) {
                finalResult.textContent = "CONGRATS, YOU ARE THE FINAL WINNER!!!";
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