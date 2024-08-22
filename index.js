//set up a choice for rock, paper, scissor
const choice = ['rock', 'paper', 'scissor'];

//initalize computer choice variable
let computerChoice;

//initalize human choice variable
let userChoice;

//initalize computer score to 0
let computerScore = 0;

//initalize human score to 0
let humanScore = 0;

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
        userChoice = prompt('please enter rock, paper, or scissor');

        //conditionals to see if the 
        if (choice.includes(userChoice)){

            //return enter either rock, paper, or scissors
            return `Your choice was ${userChoice}`;
        } else {
            
            //return the user's choice
            return `please enter the correct values`;
        }

    }
}


//set up a function that gets the computer and human choice as parameters and play one round
function playRound(human, computer) {
    //rock beats scissor
    if (human === 'rock' && computer === 'scissor') {
        humanscore++; 
        return `Human won! Human chose ${human}, the new score is ${humanScore}`
    } else if (human === 'scissor' && computer === 'rock') {
        computerScore++;
        return `Computer won! Computer chose ${computer}, new score is ${computerScore}`
    }
}

//placing human function in new variable
const humanSelection = getHumanChoice();

//placing computer function in new variable
const computerSelection = getComputerChoice();

//call function
playRound(computerSelection, humanSelection);


