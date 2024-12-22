// reduce

const myNums = [1, 2, 3, 4, 5]

// const sum = myNums.reduce( function(accumulator, currentValue)  {return accumulator + currentValue}, 0)

// const sum = myNums.reduce( (accumulator, currentValue) =>  {return accumulator + currentValue}, 0) // same with arrow function

// const sum1 = myNums.reduce( function(accumulator, currentValue)  {
//     console.log (`accumulator: ${accumulator} currentValue: ${currentValue}`) // to understand the working
//     return accumulator + currentValue}, 0)


// console.log(sum)
// console.log(sum1)


const shoppingCart = [
    {
        itemName: "Shoes",
        price: 1999
    },
    {
        itemName: "Shirt",
        price: 1079
    },
    {
        itemName: "Trousers",
        price: 1099
    },
    {
        itemName: "Hoodie",
        price: 1499
    },
]

const totalCost = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalCost)