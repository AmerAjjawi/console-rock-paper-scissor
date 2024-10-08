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

//initalize winner
let winner;

//set up a function to randomly get the values of choice for the computer
function getComputerChoice() {
  //needs to return the random choice from array

  //assign the choice to computerChoice with math random
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  //return the computer Choice

  return computerChoice;
}

//set up a function to validate the human choice through a prompt
function getHumanChoice() {
  //add a while loop & validiate user choice's that are in the array
  while (!choice.includes(userChoice)) {
    //prompt user choice
    userChoice = prompt("please enter rock, paper, or scissors");

    userChoice = userChoice.toLowerCase();
    if (choices.includes(userChoice)) {
      return userChoice;
    } else {
      return "Please enter a value to play ";
    }
  }
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
      //computerScore++;
      result = `You lose! Paper beats Rocks`;
      return result;
    } else if (computer === "scissors") {
      //humanScore++;
      result = `You win! Rock beats Scissors`;
      return result;
    }
  }
  //check for paper
  if (human === "paper") {
    if (computer === "rock") {
      //humanScore++;
      result = `You win! Paper beats Rock`;
      return result;
    } else if (computer === "scissor") {
      // computerScore++;
      result = `You lose! Scissors beats Rock `;
      return result;
    }
  }
  // check for scissor
  if (human === "scissor") {
    if (computer === "paper") {
      //humanScore++;
      result = `You win! Scissors beats Paper `;
      return result;
    } else if (computer === "rock") {
      //computer++;
      result = `You lose! Rock beats Scissors`;
      return result;
    }
  }
}

//placing human function in new variable
const humanSelection = getHumanChoice();

//placing computer function in new variable
const computerSelection = getComputerChoice();

//function to play five rounds

function fiveRoundsGame() {
  //use a for loop
  for (let i = 0; i < 5; i++) {
    //call function inside
    winner = playRound(humanSelection, computerSelection) * 3;
    if (winner.includes("win")) {
      player++;
      console.log(
        `Human Score: ${humanScore} | Computer Score: ${computerScore}  `
      );
    } else if (winner.includes("lose")) {
      computerScore++;
      console.log(
        `Human Score ${humanScore} | Computer Score ${computerScore} `
      );
    }
  }
  if (humanScore > computerScore) {
    return "Human won this round";
  } else {
    return "Better luck next time!";
  }
}
fiveRoundsGame();
