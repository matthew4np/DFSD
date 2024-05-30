//Select the `.text` class and assign to variable `text`
const text = document.getElementsByClassName("text").item(0);

//Select the `.words` class and assign to variable `words`
const words = document.getElementsByClassName("words box").item(0);

//Select the `.characters` class and assign to variable `characters`
const characters = document.getElementsByClassName("characters box").item(0);

//Assign an event listener to the textarea. The event listener listens to the user's input
text.addEventListener("input", myfunction)

function myfunction()
{
   //Retrieve the user's input value and display the number of characters and words

   //Write suitable statements that updates the character count

   let value = document.getElementsByClassName("text").item(0).value;

   characters.textContent=value.length;

   words.textContent=value.split(" ").length;



}




