//Define a function named printTable that takes one parameter: number.
function printTable(number)
{
    //Use a loop inside the function to generate and print the multiplication table for the number.
    for (i = 1; i <= 10; i++)
    {
        console.log(`${number} \* ${i} \= ${i * number}`);
    }
}
printTable(4);