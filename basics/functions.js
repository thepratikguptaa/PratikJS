// function addTwoNumbers(num1, num2) { // num1 and num2 are parameters
//     console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`) // assuming that num1 and num2 are numbers
// }
// const result = addTwoNumbers(3, 5)
// console.log("Result:", result) // undefined... that is why we need to return

// function addTwoNumbers(num1, num2) {
//     return num1 + num2
// console.log("Hello") // this will not be executed... after return the function will end
// }
// const result = addTwoNumbers(3, 5)
// console.log("Result:", result)

// function loginUserMessage(userName) {
//     if (userName === undefined){ // or use (!userName) instead of (userName === undefined)
//         console.log("Please enter a username")
//         return
//     }
//     return `${userName} just logged in`
// }
// console.log(loginUserMessage())

// function calculateCartPrice(...num1) { // rest operator, collects multiple elements and combines them into a single array
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 100)) // you can keep on adding values

// const user = {
//     userName: "Pratik",
//     price: 199
// }
// function handleObject(anyObject) {
//     console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
// }
// handleObject(user)
// handleObject({
//     userName: "Alexx",
//     price: 499
// }) // another way if you don't wanna create a new object

const myNewArray = [200, 400, 100]
function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([500, 300, 800, 1100])) // another way if you don't wanna create a new array