const prompt = require('prompt-sync')();

//asks the user to enter the PSI level (a floating-point number)
const psiLevel = parseFloat(prompt("PSI:"));

//If it is equal or above 100, print "Unhealthy"
if (psiLevel >= 100)
{
    console.log("Unhealthy");
}

//If it is above 50 but below 100, print "Moderate"
else if (psiLevel > 50 && psiLevel < 100)
{
    console.log("Moderate");
}

//Otherwise, if the PSI is less than 50, print "Healthy"
else if (psiLevel < 50)
{
    console.log("Healthy");
}