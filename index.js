//set up a choice for rock, paper, scissor
const choice = ["rock", "paper", "scissor"];

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
  computerChoice = choice[Math.floor(Math.random() * choice.length)];

  //return the computer Choice

  return computerChoice;
}

//set up a function to validate the human choice through a prompt
function getHumanChoice() {
  //add a while loop & validiate user choice's that are in the array
  while (!choice.includes(userChoice)) {
    //prompt user choice
    userChoice = prompt("please enter rock, paper, or scissor");

    //conditionals to see if the
    if (choice.includes(userChoice)) {
      //return enter either rock, paper, or scissors
      return userChoice;
    } else {
      //return the user's choice
      return `please enter the correct values`;
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
      computerScore++;
      result = `computer won!`;
      return result;
    } else if (computer === "scissor") {
      humanScore++;
      result = `human won!`;
      return result;
    }
  }
  //check for paper
  if (human === "paper") {
    if (computer === "rock") {
      humanScore++;
      result = `human won !`;
      return result;
    } else if (computer === "scissor") {
      computerScore++;
      result = `computer won! `;
      return result;
    }
  }
  // check for scissor
  if (human === "scissor") {
    if (computer === "paper") {
      humanScore++;
      result = `human won!`;
      return result;
    } else if (computer === "rock") {
      computer++;
      result = `computer won!`;
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
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    return "Human won this round";
  } else {
    return "Better luck next time";
  }
}

fiveRoundsGame();
