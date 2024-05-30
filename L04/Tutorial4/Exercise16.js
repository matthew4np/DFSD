//Identify and fix issues so the function correctly adds two numbers and returns the sum.
//Ensure the function handles different data types appropriately.

function addNumbers(a, b) {
    var sum = parseInt(a) + parseInt(b);
    console.log(sum);
    }
    addNumbers(10, '20'); // Incorrectly prints "1020" instead of 30