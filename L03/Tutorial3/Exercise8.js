//Define a function named calculateInterest that takes three parameters: principal, rate, and
//time.
function calculateInterest(principal, rate, time)
{
    //Calculate the interest using the formula: Interest = (Principal × Rate × Time)/ 100
    let Interest = (principal * rate * time) / 100;

    //Return the interest and print it.
    return Interest;
}

console.log(calculateInterest(100, 0.02, 12));