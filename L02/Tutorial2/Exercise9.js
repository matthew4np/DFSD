//Initialize an array with several numbers.
let arraySeveralNumbers = [1,2,3,4,5,6,7];

//Declare final sum
let finalSum = 0;

//Use a for loop to iterate through the array and sum up all the elements.
for (n = 0; n < arraySeveralNumbers.length; n++)
{
    finalSum = finalSum + arraySeveralNumbers[n];
}
console.log(finalSum);