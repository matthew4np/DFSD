// let student =
// {
//     firstName: 'John', 
//     lastName: 'Smith', 
//     'age': 19, 
//     contact:
//     {
//         email:'johnsmith@fakeschool.com',   
//         phoneNumber:
//         {
//             'country code':'+65',
//             'number':'9919912'
//         },
//     },
//     address:
//     {
//         'streetName': 'Yishun Ring Road',
//         'building': 'Blk 171 #11-221',
//         classes:
//         [
//             "Computing 101",
//             "Computing 102",
//             "Computing 103"
//         ],
//         grades:
//         [
//             {
//                 'subject name':'Computing 1',
//                 'Grade': 85
//             },
//             {
//                 'subject name':'Computing 2',
//                 'grade': 31
//             },
//             {
//                 'subject name':'Computing 3',
//                 'grade': 75
//             },
//         ]
//     },
//     shortName: function() {
//         return this.firstName + " " + this.lastName + " " + "(" + this.contact.email + ")";
//     }
    
// }

//Q1: Write the code that will display the first name and last name of the student in one line inside the console

// console.log(student.firstName + " " + student.lastName);

//Q2: Display the age of the student in the console

// console.log(student.age);

//Q3: Display the student's country code and phone number in the same line using the console

//console.log(student.contact.phoneNumber["country code"] + student.contact.phoneNumber.number);

//Q4: Change the age of the student to 21
// student.age = 21;
// console.log(student.age);

//Q5: Add a new property to the student object. The property name is "gender" and the value is "male"

// student.gender = "male";
// console.log(student.gender);

//Q6: The student is taking one more class, "Computing 104". Add that to the classes array inside the student's object (hint: consult previous lesson on sequences for how to add to the back of an array)

// student.address.classes.push("Computing 104");
// console.log(student.address.classes);

// //Q7: Evaluate the last line of the code below:
// let s = student;
// s.contact.email = "johnsmith@fakehotmail.com";
// console.log(student.contact.email);

// for (let x in student.address) {
//     console.log(x," : ", student.address[x]);
// }

//Q8: Complete the code below so that it will yield the following output:

//streetName : Yishun Ring Road 
//building: Blk 171 #11-221

//Q9: Add a method the student object definition (that is, directly within let student = { … } that when called will return the following output:

//John Smith (johnsmith@fakehotmail.com)
//console.log(student.shortName());

//Q10: Consider the following object below, which pairs a studeach student:

const prompt = require('prompt-sync')();

let studentDatabase = {
    "A123456":"John Doe",
    "B421123":"Jane Smith",
    "C1231234":"James Bond"
};

let studentId = prompt("Please enter the student ID: ");

//console.log(studentDatabase['A123456']);

if (Object.keys(studentDatabase).includes(studentId) == true) {
    console.log("Student found! Their name is: ", studentDatabase[studentId])
} else {
    console.log("The student is not found!");
}