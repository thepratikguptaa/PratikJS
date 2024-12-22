// const score = 100
// console.log(score)

// const newScore = new Number(101)
// console.log(newScore)

// console.log(newScore.toString())
// let value = newScore.toString().length
// console.log(value)
// console.log(typeof value) // from number to string then back to number

// const floatNum = 103.8945
// console.log(floatNum)
// console.log(floatNum.toFixed(2))
// console.log(floatNum.toPrecision(4)) // notice the difference between toFixed and toPrecision
// console.log(1123.4567.toPrecision(3)) // gives the rest as exponent

// const balance = 10000000000
// const balanceInUSD = balance.toLocaleString()
// const balanceInINR = balance.toLocaleString("en-IN")
// console.log(balanceInUSD)
// console.log(balanceInINR)




//++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++



// console.log(Math) // Math is a global object with many methods
// console.log(Math.abs(-4))
// console.log(`Round off value of 4.3 = ${Math.round(4.3)}`)
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.3))
// console.log(Math.min(4, 3, 5, 2, 6))
// console.log(Math.max(4, 3, 5, 2, 6))
// console.log(Math.random())

// generate a number between 10 and 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))