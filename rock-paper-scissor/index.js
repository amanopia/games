'use strict'

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result');
const compImage = document.querySelector('.computer-image');
const userImage = document.querySelector('.user-image');

const possibleChoices = document.querySelectorAll('.button');
console.log(possibleChoices);

let userChoice;     // initial value : undefined, scope : block
let usrComparisonVar;
let computerChoice; // initial value : undefined, scope : block

for(let i = 0; i<possibleChoices.length; i++){
    // in this function, we are selecting either a rock, paper, or a scissor using a button
    possibleChoices[i].addEventListener('click', function(event){
        userChoice = Number(event.target.id);
        let arr = ["rock","paper","scissor"];
        userChoiceDisplay.innerHTML = arr[userChoice-1];
        usrComparisonVar = arr[userChoice-1];
        userImage.src=`images/${userChoice}.png`
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
            compImage.src = `images/${randomNumber}.png`
            break;
        case 2:
            computerChoice = "paper";
            compImage.src = `images/${randomNumber}.png`
            break;
        case 3:
            computerChoice = "scissor";
            compImage.src = `images/${randomNumber}.png`
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function checkResult() {
    // Add logic for when the computer wins
    // All the other cases will be when user wins

    if(computerChoice === usrComparisonVar){
        result.innerHTML = "draw";
    } else if(computerChoice === "scissor" && usrComparisonVar === "paper") {
        result.innerHTML = "Computer Won";
    } else if(computerChoice === "rock" && usrComparisonVar === "scissor") {
        result.innerHTML = "Computer Won";
    } else if(computerChoice === "paper" && usrComparisonVar === "rock") {
        result.innerHTML = "Computer Won";
    } else {
        result.innerHTML = "User won!"
    }
}