// for of

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {  // for of loop
//     console.log(num)
// }

// const greetings = "Good Morning"
// for (const greet of greetings) {
//     console.log(`Each char is : ${greet}`)
// }


// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
map.set('IN', "India") // will overwrite the previous value... no duplication
// console.log(map) // order is maintained

for (const [key, value] of map) {
    // console.log(key, ':-', value)
    
}


const myObject = {
    'game1': 'NFS',
    'game2': 'FIFA'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value)  // Object is not iterable
}