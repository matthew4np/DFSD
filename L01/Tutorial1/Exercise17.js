const prompt = require('prompt-sync')();

//Declare a variable for the score (score).
let score = parseInt(prompt("Enter score:"));

//Use if-else statements to classify the score into grades (A, B, C, D, F) and print the grade.

if (score >= 90 && score <= 100)
{
    grade = "A";
}
else if (score >= 80 && score <= 89)
{
    grade = "B";
}
else if (score >= 70 && score <= 79)
{
    grade = "C";
}
else if (score >= 60 && score <= 69)
{
    grade = "D";
}
else if (score <= 59)
{
    grade = "F";
}

// switch(true)
// {
//     case score >=90 && score <=100:
//     grade = "A";
//     break;

//     case score >=80 && score <=89:
//     grade = "B";
//     break;

//     case score >=70 && score <=79:
//     grade = "C";
//     break;

//     case score >=60 && score <=69:
//     grade = "D";
//     break;

//     case score <60:
//     grade = "F";
//     break;
//     //case

//     default:
//     grade = "INVALID";
// }

console.log(`Score ${score} is equivalent to \CGrade ${grade}\)`)