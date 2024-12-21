// if

// const isUserLoggedIn = true
// if (isUserLoggedIn) {
//     console.log("User is logged in")
// } else {
//     console.log("User is not logged in")
// }

const balance = 900
// if (balance > 500) console.log("User can buy a new game")

// if (balance >= 1000) {
//     console.log("User can buy two games")
// } else if (balance <= 500) {
//     console.log("User can buy only one game")
// } else {
//     console.log("User needs more money to buy two games")
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGmail = false
const loggedInFromMicrosoft = false
const guestUser = true
if (isUserLoggedIn && debitCard && (loggedInFromGmail || loggedInFromMicrosoft || guestUser)) {
    console.log("Allowed to buy games")
}