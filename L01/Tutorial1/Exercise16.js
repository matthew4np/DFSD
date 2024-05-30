const prompt = require('prompt-sync')();

//Declare a variable for the number (num).
let num = parseInt(prompt("Enter number:"));

//Use the modulus operator (%) to find the remainder when num is divided by 2.
//Based on the remainder, print whether num is even or odd.

if ((num % 2) == 0)
{
    console.log("The number is even")
}
else
{
    console.log("The number is odd");
}