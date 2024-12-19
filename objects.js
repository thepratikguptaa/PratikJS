// ways of creating objects:
// 1. singleton (constructor function):
//      Object.create()

// 2. object literal:
// const mysym = Symbol("key1") // creating a symbol
// const myObj = {
//     name: "Pratik",
//     "full name": "Pratik Gupta",
//     [mysym]: "djendkijsncbiau", // correct way to use symbol as key in object
//     age: 19,
//     location: "sikkim",
//     email: "pratikguptamain@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday", "tuesday", "wednesday"]
// }

// console.log(myObj.email) // dot notation
// console.log(myObj["email"]) // bracket notation
// console.log(myObj["full name"]) //only possible in bracket notation
// console.log(myObj[mysym])
// console.log(myObj)

// myObj["email"] = "pratik_202400459@smit.smu.edu.in"
// Object.freeze(myObj) // this will freeze or lock the object
// myObj["email"] = "pratikguptamain@gmail.com"
// console.log(myObj)

// myObj.greeting = function(){
//     console.log("Hello User")
// }
// myObj.greetingTwo = function(){
//     console.log(`Hello User, ${this.name}`) // 'this' keyword points to the same object
// }

// console.log(myObj.greeting())
// console.log(myObj.greeting) // function returnback... function execute nahi hua hai, sirf function ka reference print hua hai
// console.log(myObj.greetingTwo())

// const tinderUser = new Object() // creating an object using constructor function (singleton object creation)
const tinderUser = {} // non singleton object creation
tinderUser.id = "123abc"
tinderUser.name = "Pratik"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "pratikguptamain@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Pratik",
            lastName: "Gupta"
        }
    }
} // nested object
// console.log(regularUser.fullName.userFullName.firstName) 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3) // {} is the target object, not compulsory but good practice
const obj4 = {...obj1, ...obj2, ...obj3} // spread operator, easier way

// console.log(obj4)

// console.log(Object.keys(tinderUser)) // returns an array of keys
// console.log(Object.values(tinderUser)) // returns an array of values
// console.log(Object.entries(tinderUser)) // returns an array of key-value pairs
// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // returns true or false

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Pratik"
}

// console.log(course.courseInstructor)
const {courseInstructor: instructor} = course // object destructuring
console.log(instructor)