//Initialize an array with several numbers.
let arrayNumber = [4,5,2,6,3];

//Use a for loop to traverse the array and find the largest number.
for (i = 0; i < arrayNumber.length; i++)
{
    console.log(`Index ${i}: ${arrayNumber[i]}`);
    console.log(`Index ${arrayNumber.length -1}: ${arrayNumber[arrayNumber.length -1]}`);
    if (arrayNumber[i] > arrayNumber[arrayNumber.length -1])
    {
        console.log(`Index ${i} has the largest number of ${arrayNumber[i]}`);
        arrayNumber.splice(arrayNumber.length -1,1);
    }
    else
    {
        console.log(`Index ${arrayNumber.length -1} has the largest number of ${arrayNumber[arrayNumber.length -1]}`);
        arrayNumber.splice(i,1);
    }
    i--;
}