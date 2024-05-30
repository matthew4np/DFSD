//Write an IIFE that takes two numbers as parameters and logs their sum
let sumNumbers = (
    function(num1, num2)
    {
        return num1 + num2;
    }
)
console.log(sumNumbers(2,3));