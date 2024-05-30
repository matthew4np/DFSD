//Define a function named checkAge that takes one parameter: age.
function checkAge(age)
{
    //Use conditional statements to categorize the age and return the category.
    if (age <=12)
    {
        let person = "child";
        return person;
    }
    else if (age >= 13 && age <=21)
    {
        let person = "teen";
        return person;
    }
    else if (age >= 21 && age <=100)
    {
        let person = "adult";
        return person;
    }
}

console.log(checkAge(30));