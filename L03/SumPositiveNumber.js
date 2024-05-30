/*
Create a function sumPositiveNumbers that takes an array of
numbers and returns the sum of only the positive numbers
(0 is not considered a positive number)
*/

//Create a function sumPositiveNumbers
function sumPositiveNumbers(arrayOfNumbers)
{
    let SumOfOnlyPositiveNumbers = 0;

    for (element = 0; element < arrayOfNumbers.length; element++)
    {
        if (arrayOfNumbers[element] > 0)
        {
            SumOfOnlyPositiveNumbers = SumOfOnlyPositiveNumbers + arrayOfNumbers[element];
        }
    }

    //returns the sum of only the positive numbers
    return SumOfOnlyPositiveNumbers;
}

console.log(sumPositiveNumbers([10,0,-10]));