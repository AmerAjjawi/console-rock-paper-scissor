//set up a choice for rock, paper, scissor
let choice = ['rock', 'paper', 'scissor'];

//initalize computer choice variable
let computerChoice;

//initalize human choice variable
let userChoice;

//set up a function to randomly get the values of choice for the computer
function getComputerChoice() {
    //needs to return the random choice from array
    
    //assign the choice to computerChoice with math random
    computerChoice = choice[Math.floor(Math.random() * choice.length)];

    //return the computer Choice

    return computerChoice;
}

//call the function 
getComputerChoice();

//test the output
console.log(computerChoice);