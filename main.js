// step 2 - get the computer choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const computerChoice = getComputerChoice();

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

// step 5 - write logic to play a single round
function playRound(human, computer) {
  // easier to read variables
  human = human.toLowerCase();
  computer = computerChoice;

  //   console.log(`Computer picked ${computerChoice}`);

  // round declaration
  let round = `human: ${human} \ncomputer: ${computer}`;

  // 1. check for a tie
  if (human === computer) {
    console.log(round);
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
    console.log(round);
    console.log(`You win this round! ${human} beats ${computer}!`);
  } else {
    computerScore++;
    console.log(round);
    console.log(`Computer wins this round... ${computer} beats ${human}.`);
  }
  console.log(`human ${humanScore} \ncomputer ${computerScore}`);
}

playRound(getHumanChoice(), computerChoice);
