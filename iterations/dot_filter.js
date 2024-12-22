// const coding = ["js", "cpp", "python", "ruby", "java"]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item 
// })
// console.log(values) // undefined... forEach never returns anything


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNums = myNums.filter( (num) => (num % 2 === 0 ))
// console.log(evenNums)

// const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const greaterThan4 = myNums2.filter( (num) => {
//     return num > 4 // when scope is used, implicit return does not work. We need to explicitly return
// } )
// console.log(greaterThan4)


// const newNums3 = []
// myNums.forEach( (num) => {   // you can also use forEach if you really want to
//     if (num > 4) {
//         newNums3.push(num)
//     }
// })
// console.log(newNums3)


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
]

const userBooks = books.filter( (book) => book.genre === 'Fiction')
const userBooks2 = books.filter( (book) => book.publish >= 1999) 



console.log(userBooks) 
console.log(`Books published on or after 1999: ${JSON.stringify(userBooks2)}`) // JSON.stringify() converts object to readable string