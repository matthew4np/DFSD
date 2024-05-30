const prompt = require('prompt-sync')();

//Declare predefined number
let predefinedNumber = 7;

//Is number incorrect?
let isNumberFalse = true;

//using a do-while loop where the user has to guess a
//predefined number (e.g., 7).

do
{
    let n = prompt("Please enter a number:");
    if (n != predefinedNumber)
    {
        console.log("You have guessed wrongly!");
    }
    else
    {
        console.log("You have guessed correctly");
        isNumberFalse = false;
    }
    
}
while (isNumberFalse);
