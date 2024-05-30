const prompt = require('prompt-sync')();

// Choose a number to generate a multiplication Table
let numForMultiTable = prompt("Enter the number:");


// Use a for loop to compute and print the multiplication table from 1 to 10.
for (i = 1; i <= 10; i++)
{
    console.log(i*numForMultiTable);
}