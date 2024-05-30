const prompt = require('prompt-sync')();

//Define a function named calculator that takes three parameters: operand1, operand2, and
//operator.
function Calculator(operand1, operand2, operator)
{
    //Inside the function, use a switch or if-else statement to perform the operation
    //based on the operator (+, -, *, /).
    if (operator === '+')
    {
        let result = operand1 + operand2;

        //Return the result of the operation.
        return result;
    }
    else if (operator === "-")
    {
        let result = operand1 - operand2;
        return result;
    }
    else if (operator === "*")
    {
        let result = operand1 * operand2;
        return result;
    }
    else if (operator === "/")
    {
        let result = operand1 / operand2;
        return result;
    }
}

//Test the function with different operands and operators.
console.log(Calculator(2,8,'+'));