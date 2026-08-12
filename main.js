// step 2 - get the computer choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// console.log(getComputerChoice());

// step 3 - get the human choice
function getHumanChoice() {
  const choice = prompt("Select rock, paper or scissors", "");
  return choice;
}

// console.log(getHumanChoice());

// step 4 - declare the players score

let humanScore = 0;
let computerScore = 0;

// step 5 - write logic to play a single roundStr
function playRound(human, computer) {
  // easier to read variables
  human = human.toLowerCase();

  //   console.log(`Computer picked ${computerChoice}`);

  // roundStr declaration
  let roundStr = `human: ${human} \ncomputer: ${computer}`;

  // 1. check for a tie
  if (human === computer) {
    console.log(roundStr);
    console.log(`It's a tie! You both chose ${human}`);
    return;
  }

  // 2. check all human WINNING conditions
  const humanWins =
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper");

  // 3. increment score and log result based on the boolean
  if (humanWins) {
    humanScore++;
    console.log(roundStr);
    console.log(`You win this round! ${human} beats ${computer}!`);
  } else {
    computerScore++;
    console.log(roundStr);
    console.log(`Computer wins this round... ${computer} beats ${human}.`);
  }
  console.log(`human ${humanScore} \ncomputer ${computerScore}`);
}

// step 6 - logic for an entire game
function playGame() {
  // for (let round = 1; round <= 5; round++) {
  //   const computerChoice = getComputerChoice(); // generates a fresh choice every time
  //   playRound(getHumanChoice(), computerChoice);
  // }
  const computerChoice = getComputerChoice(); // generates a fresh choice every time
  playRound(getHumanChoice(), computerChoice);

  if (humanScore === computerScore) {
    console.log(`It's a draw!`);
  } else if (humanScore > computerScore) {
    console.log(`You won!!!`);
  } else {
    console.log(`You lost to a computer...`);
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// playRound(getHumanChoice(), getComputerChoice);

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

// playGame();
