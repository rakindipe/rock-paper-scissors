// step 2 - get the computer choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// step 4 - declare the players score
let humanScore = 0;
let computerScore = 0;

// DOM Selectors
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset-btn");

// DOM Display Selectors
const roundLog = document.querySelector("#round-log");
const scoreDisplay = document.querySelector("#score-display");
const gameWinner = document.querySelector("#game-winner");

// step 5 - write logic to play a single roundStr
function playRound(human, computer) {
  human = human.toLowerCase();

  // 1. check for a tie
  if (human === computer) {
    roundLog.textContent = `It's a tie! You both chose ${human}`;
    return;
  }

  // 2. check all human WINNING conditions
  const humanWins =
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper");

  // 3. Update scores and DOM message
  if (humanWins) {
    humanScore++;
    roundLog.textContent = `You win this round! ${human} beats ${computer}!`;
  } else {
    computerScore++;
    roundLog.textContent = `Computer wins this round... ${computer} beats ${human}.`;
  }

  // 4. Update a running score display
  scoreDisplay.textContent = `human: ${humanScore} | computer: ${computerScore}`;

  // check if someone has reached 5 points to end game
  checkWinner();
}

// end-game check (replaces playGame loop...)
function checkWinner() {
  if (humanScore === 5) {
    gameWinner.textContent = `Congratulations! You won the game!`;
    endGame();
  } else if (computerScore === 5) {
    gameWinner.textContent = `Game over! The computer won...`;
    endGame();
  }
}

function endGame() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  resetBtn.style.display = "inline-block";
}

// reset game functionality
resetBtn.addEventListener("click", () => {
  // 1. reset state variables
  humanScore = 0;
  computerScore = 0;

  // 2. clear UI text
  roundLog.textContent = "";
  gameWinner.textContent = "";
  scoreDisplay.textContent = "human: 0 | computer: 0";

  // 3. re-enable choice buttons
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  // 4. hide reset button again
  resetBtn.style.display = "none";
});

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
