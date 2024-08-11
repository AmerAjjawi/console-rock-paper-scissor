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

//call function
getHumanChoice();

//test the variable
console.log(userChoice);