//Initialise an array named colors with several colors.
let arrayColors = ["Yellow","Blue","Red","Purple"];
console.log(arrayColors);

//Remove the last element using the pop() method a
let lastElement = arrayColors.pop();

//and the first element using the shift() method.
let firstElement = arrayColors.shift();

//Print the modified array and the elements removed.
console.log(arrayColors);
console.log(lastElement + " " + firstElement);