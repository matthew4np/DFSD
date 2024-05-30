//Define a function named isOddOrEven that takes one parameter: number.
const prompt = require('prompt-sync')();

function isOddorEven(n)
{
    //Inside the function, use a conditional statement to check if the number is odd or even.
    if (n % 2 == 0)
    {
        //Return "Odd" or "Even".
        return 'Even';
    }
    else
    {
        //Return "Odd" or "Even".
        return "Odd";
    }
}

//Test the function with different numbers
let differentNumber = prompt("Please enter a number: ");

//and print the results.
console.log(isOddorEven(differentNumber));

