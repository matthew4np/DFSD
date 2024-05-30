const prompt = require('prompt-sync')();

//Write a program where the users can enter four numbers.
let numberOne = parseInt(prompt("Enter 1st number:"));
let numberTwo = parseInt(prompt("Enter 2nd number:"));
let numberThree = parseInt(prompt("Enter 3rd number:"));
let numberFour = parseInt(prompt("Enter 4th number:"));

//Calculate and display the average of these four numbers. (do not use functions)
let averageNumber = (numberOne + numberTwo + numberThree + numberFour) / 4;

console.log(averageNumber);
