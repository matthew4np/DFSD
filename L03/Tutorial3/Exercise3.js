//Declare an array
let arrayColors = ["Yellow","Blue","Red","Purple"];

//Create a function that is allows one to reverse an array.
function functionArrayReverse(arrayColors)
{
    //Declare a reverse array
    let arrayReverse = [];

    for (n = arrayColors.length -1; n >= 0; n--)
    {
        arrayReverse.push(arrayColors[n]);
    }

    return arrayReverse;
}

console.log(functionArrayReverse(arrayColors));