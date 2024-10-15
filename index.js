//set up a choice for rock, paper, scissor
const choices = ["rock", "paper", "scissors"];

//initalize computer choice variable
let computerChoice;

//initalize human choice variable
let userChoice;

//initalize computer score to 0
let computerScore = 0;

//initalize human score to 0
let humanScore = 0;

//initalize result variable
let result;

//set up a function to randomly get the values of choice for the computer
function getComputerChoice() {
  //needs to return the random choice from array

  //assign the choice to computerChoice with math random
  generatedChoice = choices[Math.floor(Math.random() * choices.length)];

  //return the computer Choice

  return generatedChoice;
}

//set up a function to validate the human choice through a prompt
function getHumanChoice() {
  //add a while loop & validiate user choice's that are in the array
  while (!choices.includes(userChoice)) {
    //prompt user choice
    let userPrompt = prompt("please enter rock, paper, or scissors");

    //userChoice = userChoice.toLowerCase();
  }
  return userPrompt;
}

//set up a function that gets the computer and human choice as parameters and play one round
function playRound(human, computer) {
  // check for a tie
  if (human === computer) {
    result = `It's a tie`;
    return result;
  }

  //check for rock
  if (human === "rock") {
    if (computer === "paper") {
      computerScore++;
      result = `You lose! Paper beats Rocks`;
      return result;
    } else if (computer === "scissors") {
      humanScore++;
      result = `You win! Rock beats Scissors`;
      return result;
    }
  }
  //check for paper
  if (human === "paper") {
    if (computer === "rock") {
      humanScore++;
      result = `You win! Paper beats Rock`;
      return result;
    } else if (computer === "scissors") {
      computerScore++;
      result = `You lose! Scissors beats Paper `;
      return result;
    }
  }
  // check for scissor
  if (human === "scissors") {
    if (computer === "paper") {
      humanScore++;
      result = `You win! Scissors beats Paper `;
      return result;
    } else if (computer === "rock") {
      computer++;
      result = `You lose! Rock beats Scissors`;
      return result;
    }
  }
}

//function to play five rounds

function threeRounds() {
  //Display score of who ever reaches 3 rounds
  while (humanScore < 3 && computerScore < 3) {
    //placing human function in new variable
    userChoice = getHumanChoice();

    //placing computer function in new variable
    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    userChoice = "";
    computerChoice = "";
  }
  if (humanScore > computerScore) {
    console.log(
      `Human won! Human Score: ${humanScore} | Computer Score: ${computerScore}`
    );
  } else {
    console.log(
      `Human lost! Human Score: ${humanScore} | Computer Score: ${computerScore}`
    );
  }
}
threeRounds();
