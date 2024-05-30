const prompt = require('prompt-sync')();

//asks the user for his birth year (e.g. 1982, 1999 etc).
let birthYear = prompt("Enter your birth year:");

//asks the user for the current year.
let currentYear = prompt("Enter Current Year:");

//Calculate the user's age
let userAge = currentYear - birthYear;

//Print out his age.
console.log(userAge);