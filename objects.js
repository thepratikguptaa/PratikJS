// ways of creating objects:
// 1. singleton (constructor function):
//      Object.create()

// 2. object literal:
const mysym = Symbol("key1") // creating a symbol
const myObj = {
    name: "Pratik",
    "full name": "Pratik Gupta",
    [mysym]: "djendkijsncbiau", // correct way to use symbol as key in object
    age: 19,
    location: "sikkim",
    email: "pratikguptamain@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday", "wednesday"]
}

// console.log(myObj.email) // dot notation
// console.log(myObj["email"]) // bracket notation
// console.log(myObj["full name"]) //only possible in bracket notation
// console.log(myObj[mysym])
// console.log(myObj)

// myObj["email"] = "pratik_202400459@smit.smu.edu.in"
// Object.freeze(myObj) // this will freeze or lock the object
// myObj["email"] = "pratikguptamain@gmail.com"
// console.log(myObj)

myObj.greeting = function(){
    console.log("Hello User")
}
myObj.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`) // 'this' keyword points to the same object
}

console.log(myObj.greeting())
// console.log(myObj.greeting) // function returnback... function execute nahi hua hai, sirf function ka reference print hua hai
console.log(myObj.greetingTwo())




