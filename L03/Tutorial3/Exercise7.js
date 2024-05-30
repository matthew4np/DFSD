//Define a function named celsiusToFahrenheit that takes one parameter: celsius.
function celsiusToFahrenheit(celsius)
{
    //Convert the Celsius temperature to Fahrenheit using the formula (celsius * 9/5) + 32.
    let Fahrenheit = (celsius * 9/5) + 32;

    //Return the Fahrenheit temperature.
    return Fahrenheit;
}

//Call the function and print the output for several Celsius values.
console.log(celsiusToFahrenheit(34));
console.log(celsiusToFahrenheit(40));
console.log(celsiusToFahrenheit(45));
