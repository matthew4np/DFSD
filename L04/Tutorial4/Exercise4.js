//Initialize an 2d array
let squareMatrix = [
    [1, 2, 3], //element 0
    [4, 5, 6], //element 1
    [7, 8, 9], //element 2
]

////Use nested loops to iterate through the array and sum all the elements

//Declare sumAllTheElements
let sumAllTheElements = 0;

for (let i = 0; i < squareMatrix.length; i++)
{
    for (let j = 0; j < squareMatrix[i].length; j++)
    {
        console.log(squareMatrix[i][j]);
        sumAllTheElements = sumAllTheElements + squareMatrix[i][j];
    }
}
console.log(sumAllTheElements);