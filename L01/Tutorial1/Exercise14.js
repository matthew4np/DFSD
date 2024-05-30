const prompt = require('prompt-sync')();

//Declare a variable for the temperature in Celsius (celsius).
let celsius = parseFloat(prompt("Enter celsius:"));

//Convert it to Fahrenheit using the formula
//Fahrenheit=(Celsius× 9/5)+32.
let fahrenheit = (celsius * 9/5) + 32;

//Print the temperature in Fahrenheit to the console.
console.log(fahrenheit.toFixed(2));