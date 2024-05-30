//Define a function named calculateCircleArea that takes the radius as a parameter.
function calculateCircleArea(radius)
{
    //Use the formula: Area = 𝜋 × radius^2 to calculate the area.
    let Area = radius * radius * 3.14;

    //Return the area and print the result.
    return Area;
}

console.log(calculateCircleArea(5));