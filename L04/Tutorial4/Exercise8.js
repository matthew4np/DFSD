//Write a simple IIFE that prints "Hello, World!" using both traditional function syntax and arrow function syntax.

//Create an IIFE using traditional function syntax.

let iifehelloWorld = (
    function(string)
    {
        console.log(string);
    }
)
iifehelloWorld("Hello World");

//Create an IIFE using arrow function syntax.
let arrowHelloWorld = (string) => console.log(string);

arrowHelloWorld("Hello World");