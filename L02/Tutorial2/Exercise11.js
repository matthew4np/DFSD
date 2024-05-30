const prompt = require('prompt-sync')();

//Start with a given string
let givenString = prompt("Please enter a string: ");

const arrayString = givenString.split("");
var tempArray = [];

//Use a for loop to create a new string that is the reverse of the original.
for (i = 0; i < arrayString.length; i++)
{
     let j = arrayString.length -i -1;
     console.log(`Index ${j}: ${arrayString[j]}`);
     tempArray.push(arrayString[j]);
}
console.log(tempArray.join(""));