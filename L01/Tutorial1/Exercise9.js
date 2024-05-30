const prompt = require('prompt-sync')();

//Write two prompts to ask a user for two numbers. (Hint: you need one variable for each number)
let number1 = prompt("Enter number 1:");
let number2 = prompt("Enter number 2:");

//Calculate the product of those two numbers and console.log out the product
let productNumber = number1 * number2;
console.log(productNumber);
