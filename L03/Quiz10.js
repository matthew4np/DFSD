/*
Arguments
`array` (Array): Array of numbers.
Returns
(Number): Returns the mean of the values in `array`.

Examples
mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667

The function should return NaN if array is empty.
mean([]); // => NaN
*/

//Declare function mean()
function mean(array)
{
    let sumOfNumbers = 0;
    let Number = 0;

    if (array.length === 0)
    {
        Number = 'NaN';
    }
    else if (array.lenth !== 0)
    {
        for (element = 0; element < array.length; element++)
        {
            sumOfNumbers = sumOfNumbers + array[element];
        }
            
        Number = sumOfNumbers / array.length;
    }   

    //(Number): Returns the mean of the values in `array`
    return Number;
}
console.log(mean([2,2,2]));