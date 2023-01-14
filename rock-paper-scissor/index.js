'use strict'

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result');

const possibleChoices = document.querySelectorAll('.button');
console.log(possibleChoices);

let userChoice;     // initial value : undefined, scope : block
let computerChoice; // initial value : undefined, scope : block

for(let i = 0; i<possibleChoices.length; i++){
    // in this function, we are selecting either a rock, paper, or a scissor using a button
    possibleChoices[i].addEventListener('click', function(event){
        userChoice = event.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        console.log(computerChoice);
        console.log(userChoice);
        checkResult();
    })
}

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * 3); // or possibleChoices.length
    // return randomNumber;

    switch(randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissor";
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function checkResult() {
    // Add logic for when the computer wins
    // All the other cases will be when user wins

    if(computerChoice === userChoice){
        result.innerHTML = "draw";
    } else if(computerChoice === "scissor" && userChoice === "paper") {
        result.innerHTML = "Computer Won";
    } else if(computerChoice === "rock" && userChoice === "scissor") {
        result.innerHTML = "Computer Won";
    } else if(computerChoice === "paper" && userChoice === "rock") {
        result.innerHTML = "Computer Won";
    } else {
        result.innerHTML = "User won!"
    }
}