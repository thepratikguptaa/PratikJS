// const user = {
//     userName: "Pratik",
//     price: 199,
//     welcomeMessage: function(){
        // console.log(`${this.userName}, Welcome to the website`);
        // console.log(this) // current context
//     }
// }

// user.welcomeMessage()
// user.userName = "Alexx"
// user.welcomeMessage()
// console.log(this) // will return "window" in browser but here "{}", because of block scope

// function one() {
//     let userName = "Pratik"
//     console.log(this.userName) // does not work in function like it did in object
// }
// one()

// const two = function() {
//     let userName = "Pratik"
//     console.log(this.userName) // Nope... same
// }
// two()

// const three = () => {   // arrow function
//     let userName = "Pratik"
//     console.log(this.userName)
// }
// three() 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implisit return

// const addTwo = (num1, num2) => (num1 + num2) // when we use parentheses, we can use multiple lines of code and give no return
// const addTwo = (num1, num2) => ({userName: "Pratik"})

// console.log(addTwo()) 

// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach((num) => (console.log(num * 2))) // forEach method to work on every element in an array without going through the traditional loop