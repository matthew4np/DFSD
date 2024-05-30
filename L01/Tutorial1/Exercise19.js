//Create variables for the heights and ages of two friends and assign them some values
let heightFriendOne = 150;
let ageFriendOne = 45;
let heightFriendTwo = 150;
let ageFriendTwo = 50;

//the player with the highest value of his height (in cm) plus five times his age wins.
//Calculate their scores
let scoreFriendOne = heightFriendOne + ageFriendOne * 5;
let scoreFriendTwo = heightFriendTwo + ageFriendTwo * 5;

//Decide who wins and print the winner to the console. Include the score in the string
//that you output to the console. Don’t forget that there can be a draw (both player
//with the same score).
if (scoreFriendOne > scoreFriendTwo)
{
    console.log(`Friend One wins with ${scoreFriendOne}`);
}
else if (scoreFriendOne === scoreFriendTwo)
{
    console.log(`It\’s a draw`);
}
else
{
    console.log(`Friend Two wins with ${scoreFriendTwo}`);
}