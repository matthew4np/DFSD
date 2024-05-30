const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter number:"));

//Use if-else statements to classify a number as positive, negative, or zero.
if (num > 0)
{
    console.log("The number is positive")
}
else if (num == 0)
{
    console.log("The number is zero");
}
else
{
    console.log("The number is negative");
}