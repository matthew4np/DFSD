
const prompt = require('prompt-sync')();

//Declare break out word
let breakOutWord = "exit";

//Implement an infinite for loop that the user can break out of by entering a specific word
//(e.g., "exit").
for (i = 0; i >= 0; i++)
{
    let w = prompt("Please enter word:");
    if (w == breakOutWord)
    {
        break;
    }
}