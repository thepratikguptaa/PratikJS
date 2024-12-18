let myDate = new Date() // date is an object just like Math object
// console.log(myDate)
// console.log(myDate.toString()) // local date
// console.log(myDate.toTimeString())  // local time
// console.log(myDate.toDateString())  // local date
// console.log(myDate.toLocaleString())    // local date and time // BEST
// console.log(myDate.toLocaleString(`default`,{
//     weekday: 'long',
//     month: 'long',
//     year: '2-digit',
// })) // for customizing the date, day, month or year as per our preference
// console.log(myDate.getTime()) // timestamp
// console.log(myDate.getFullYear()) // year
// console.log(myDate.getMonth()) // month // month starts from 0, january is 0 and december is 11, use +1 to not get confused
// console.log(myDate.getDate()) // date
// console.log(myDate.getDay()) // day // starts from monday, monday is 1
// console.log(myDate.getHours()) // hours
// console.log(myDate.getMinutes()) // minutes
// console.log(myDate.getSeconds()) // seconds
// console.log(myDate.getMilliseconds()) // milliseconds
// console.log(myDate.getTimezoneOffset()) // timezone

// creating a date
// let myCreatedDate = new Date(2005, 9, 1, 21, 41) // my birthdate and birthtime hehe
// console.log(myCreatedDate.toLocaleString()) 

// another ways of creating a date
// let myCreatedDate = new Date("10-01-2005")
// console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date("2005 october 01")
// console.log(myCreatedDate.toDateString())


console.log(`Today is ${myDate.getDate()} of ${myDate.getMonth()+1} of ${myDate.getFullYear()}`)
console.log(`Time is ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`)