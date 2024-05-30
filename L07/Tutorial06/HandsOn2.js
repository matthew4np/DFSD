//Ask the user for a string, and then display the count of each alphabet and space in the string, assuming that the user won't key in any punctuation marks or other symbols. The idea is if the user enters the string "apple pie", we will get the following output

/*
a: 1
p: 3
l: 1
e: 2
 : 1
i: 1

The order of how the alphabet appears is not important.
We will explore how to use an object to solve this problem. Assume we start off the following code:
*/

const prompt = require('prompt-sync')();

let message = prompt("Please enter something: ");

console.log(Object.entries(message));
console.log(Object.values(message).includes("p"))

//Q1: Write the code below to create an empty object stored in the variable alphaCount

alphaCount = {};
console.log(Object.entries(alphaCount));

//Q2: Complete the code below, such that if the character stored in the variable alpha is not found as a property inside alphaCount, it will be stored in the alphaCount object as a property with value of 1

for (let alpha of message) {
    console.log(alpha);
    console.log(typeof(alphaCount[alpha]));
    if (Object.values(alphaCount).includes(alpha) == false && typeof(alphaCount[alpha]) == 'undefined') {
        console.log(Object.values(alphaCount).includes(alpha));
        alphaCount[alpha] = 1;
        console.log(`${alpha} : ${alphaCount[alpha]}`);
    }
    else

    //Q3: Add an else to the if part from question 2, such that if alpha exists as a key in alphaCount, its value is increased by 1

    {
        alphaCount[alpha] = alphaCount[alpha] + 1;
        console.log(`${alpha} : ${alphaCount[alpha]}`);
    }
}

console.log(Object.entries(alphaCount));