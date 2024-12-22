 //  Primitive (call by value) datatypes:
 //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);


// Reference (Non primitive) datatypes:
// Array, Objects, Functions

// const heros = ["ironman", "venom", "spiderman"];
// let myObj = {
//     name: "Pratik",
//     age: 19, // has keys and values like dictionary in python
// }

// const myFunction = function(){
//     console.log("Hello world");
// }
// myFunction() // calling a function
// console.log(typeof myFunction)
// console.log(typeof myObj)


// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++ Memory Allocation +++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (non-primitive)

let myName = "Pratik"
let anotherName = myName
anotherName = "Alex"
console.log(myName, anotherName)

let userOne = {
    email: "pratik@gmail.com",
    upi: "user@ybl"
    }

let userTwo = userOne
userTwo.email = "pratik@google.com"

console.log(userOne.email, userTwo.email)

// https://excalidraw.com/#json=NyVnH1kH-CYugAr4WvWhj,nAiItUAzMcITU6zdqqHJOw