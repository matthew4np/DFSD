//Declare stars
let stars = "*";

//Declare number of rows
let numberOfRows = 5;

//Use a for loop to print a triangle pattern of stars (*). The triangle should have 5 rows,
//with the number of stars increasing by one in each row.

for (n = 1; n <= numberOfRows; n++)
{
    console.log(stars.repeat(n));
}


