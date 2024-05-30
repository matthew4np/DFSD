
const prompt = require('prompt-sync')();

const x = 3.1417;

//Allow the user to input a floating point number. Assign that number to a variable named radius.
let radius = parseFloat(prompt("Enter your radius:"));


//Calculate the area using the given radius and
const area = x * radius * radius;

//console.log the answer.
console.log(area.toFixed(2));