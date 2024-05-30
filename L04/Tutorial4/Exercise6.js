//Declare a simple 2D array
let array2Dsimple = [
    [11,55,33,44],  // Element 1
    [55,66,99,88]   // Element 2
];

//Iterate through each row (element) of the array.
for (i = 0, j = 0; i < array2Dsimple.length; i++)
{
    //For each row, find the largest number.
    let numberLargest = array2Dsimple[i][j];

    for (j = 0; j < array2Dsimple[i].length; j++)
    {
        console.log(`Row ${i} Element ${j} = ${array2Dsimple[i][j]}`);
        
        if (numberLargest > array2Dsimple[i][j])
        {
            continue;
        }
        else
        {
            numberLargest = array2Dsimple[i][j];
        }
    }
    console.log(`The largest number in Row ${i} is ${numberLargest}`);
}