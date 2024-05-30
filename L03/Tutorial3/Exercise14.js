//Define a function named canVote that takes age as a parameter.
function canVote(age) {

    //If the age is 21 or older, return true; otherwise, return false.
    if (age >= 21)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//Test the function with various ages.
console.log(canVote(18));
console.log(canVote(21));
console.log(canVote(30));
