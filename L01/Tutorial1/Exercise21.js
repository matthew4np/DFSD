const prompt = require('prompt-sync')();

//X dollars
let xDollars = parseInt(prompt("X:")); // X dollars

//Y cents
let yCents = parseInt(prompt("Y:")); // Y cents

//The user wants to buy Z muffins.
let zMuffins = parseInt(prompt("Z:")); // number of muffins

//A muffin costs X dollars and Y cents
let costMuffins = xDollars + yCents /100;
let totalCost = zMuffins * costMuffins;

console.log(`Total cost of ${zMuffins} muffins is \(\$${totalCost.toFixed(2)}\)`);