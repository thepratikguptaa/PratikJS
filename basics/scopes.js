// Block Scope and Global Scope

let a = 99
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log(`Inner Value of a (Block scope): ${a}`)
}

// console.log(`Outer Value of a (Global scope): ${a}`)
// console.log(b)
// console.log(c) // that is why var is not good... it does not consider block scope and global scope

function one() {
    const username = "Pratik"
    function two() {
        const website = "Google"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()


if (true) {
    const userName = "Pratik"
    if (userName === "Pratik") {
        const website = " Google"
        // console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)



// ++++++++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++++++



console.log(addOne(5))
function addOne(num) {      
    return num + 1        // can execute this function even when initialization is done after calling
}
console.log(addTwo(5))
const addTwo = function (num) { // this time holding the function in a variable  
    return num + 2        // CANNOT execute this function in the same way
}


