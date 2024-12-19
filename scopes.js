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