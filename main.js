// step 2 - get the computer choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice());

// step 3 - get the human choice
function getHumanChoice() {
  const choice = prompt("Select rock, paper or scissors", "");
  return choice;
}

console.log(getHumanChoice());
