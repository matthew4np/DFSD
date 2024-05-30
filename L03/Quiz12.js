/*
Write a Javascript program to calculate an individual’s heart rate range for a low intensity
to high intensity training program. Your program should prompt the user for the age and the
resting heart rate, calculate and display the heart rate range as shown in the sample output
below

The formula for calculating heart rate range is as follows:
heart rate range = heart rate reserve * training intensity + resting heart rate

Note: training intensity is expressed in percentage

To calculate the heart rate range, you are required to follow the steps below:

Step 1: Calculate maximum heart rate using the formula
maximum heart rate = 220 - age

Step 2: Calculate heart rate reserve using the formula
heart rate reserve = maximum heart rate - resting heart rate

Step 3: Apply the formula given in the box above to calculate heart rate range for both low intensity and high intensity program.

Note: A low intensity program trains at a 30% training intensity and a high intensity program trains at 70% training intensity.

Ensure proper prompt handling for user inputs has been done.
*/
var prompt = require('prompt-sync')();


//prompt the user for the age
let age = console.log(prompt('Enter your age:'));

//prompt the the resting heart rate
let restingHeartRate = console.log(prompt('Enter your resting heart rate:'));

//heart rate range = heart rate reserve * training intensity + resting heart rate
heartRateRange = heartRateReserve * trainingIntensity + restingHeartRate;

//The range of your heart rate for low intensity training to high intensity training is
console.log('The range of your heart rate for low intensity training to high intensity training is ${heartRateRage}');