const prompt = require('prompt-sync')();

//Use a do-while loop to prompt a user to enter a number between 1 and 10 until
//they do so correctly.

let isNumberFalse = true;

do
{
    let n = prompt("Enter number between 1 to 10:");
    if(n = 1 && n <= 10)
    {
        console.log(`Your have entered ${n} correctly`);
        console.log("Program stopped");
        isNumberFalse = false;
    }
    else
    {
        console.log("You have entered wrongly. Please try again");
        continue;
    }
}
while (isNumberFalse)


   