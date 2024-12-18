// const myArr = [1, 2, 3, 4, 5] // can also keep mix of datatypes in the same array
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2)
// console.log(myArr2[1])

// myArr2.push(5)
// myArr2.push(6) // add value at the end
// myArr2.pop() // remove value from the end

// myArr2.unshift(0) // add value at the start
// myArr2.shift() // remove value from the start

// console.log(myArr2.includes(3))
// console.log(myArr2.indexOf(3)) // if not found returns -1

// console.log(myArr2.join("-"))

// console.log(myArr2)


// slice, splice
console.log(myArr2.slice(0, 2))
console.log(myArr2)

console.log(myArr2.splice(0, 2)) // manipulates the original array
console.log(myArr2) // notice the difference