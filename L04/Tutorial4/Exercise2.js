//Initialize a 2D array with specific values.
let array2D = [
    [2, 3],
    [4, 5]
];

//Write a nested loop to print each element in the format of its coordinates and value.
for (let i = 0; i < array2D.length; i++)
{
    for (let j = 0; j < array2D[i].length; j++)
    {
        console.log(array2D[i][j]);
    }
}