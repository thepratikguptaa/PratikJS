// if

// const isUserLoggedIn = true
// if (isUserLoggedIn) {
//     console.log("User is logged in")
// } else {
//     console.log("User is not logged in")
// }

// const balance = 900
// if (balance > 500) console.log("User can buy a new game")

// if (balance >= 1000) {
//     console.log("User can buy two games")
// } else if (balance <= 500) {
//     console.log("User can buy only one game")
// } else {
//     console.log("User needs more money to buy two games")
// }

// const isUserLoggedIn = true
// const debitCard = true
// const loggedInFromGmail = false
// const loggedInFromMicrosoft = false
// const guestUser = true
// if (isUserLoggedIn && debitCard && (loggedInFromGmail || loggedInFromMicrosoft || guestUser)) {
//     console.log("Allowed to buy games")
// }




// ++++++++++++++++++++++++++++++++++ Nullish Coalescing Operator ?? (null or undefined) +++++++++++++++++++++++++++++++++++++++++++++++ 

// let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15
// console.log(val1)


// const guestUser = null
const guestUser = undefined
const userName = guestUser ?? "Guest User"
console.log(userName)




// +++++++++++++++++++++++++++++++++++++++++++++++++ Ternary Operator ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Iced Tea Price is more than 80") : console.log("Iced Tea Price is less than 80")