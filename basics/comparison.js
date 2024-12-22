console.log("2" > 1)
console.log("02" > 1)
// hard to predict the output

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// reason is that an equality check == and comparison < > <= >= wokrs differently
// comparison convert null to a number, treating it is 0
// that is why null >= 0 is true and null == 0 is false

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0) // always false

console.log("2" === 2) // === strict equality, keeps datatype first priority