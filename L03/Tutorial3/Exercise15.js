//Define a function named findLargest that takes two parameters, num1 and num2.
function findLargest(num1, num2)
{
    //Compare the two numbers and return the larger one.
    if (num1 > num2)
    {
        return num1;
    }
    else
    {
        return num2;
    }
}

//Print the result for several pairs of numbers.
console.log(findLargest(10,20));
console.log(findLargest(20,10));
console.log(findLargest(30,20));