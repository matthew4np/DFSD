const prompt = require('prompt-sync'); // delete this line if programming in repl.it 
 
let studentDatabase = { 
  "A123456":"John Doe", 
  "B421123":"Jane Smith", 
  "C1231234":"James Bond" 
} 
 
let studentId = prompt("Please enter the student ID: "); 
 
if (let StudentID in studentDatabase == studentId) { 
  console.log("Student found! Their name is: ", ________); 
} else { 
  console.log("The student is not found!"); 
} 