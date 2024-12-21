// for iteration

// for (let index = 0; index< array.length; index++) {
//     const element = array[index];
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
         // console.log ("Got 5");
//     }
     // console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Multiplication table of ${i}:`);
//     for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
//         console.log(i + '*' + j + '=' + (i * j));
//     }
// }

// let myArray = ["Flash", "Batman", "Superman"]
// console.log(`Array length: ${myArray.length}`)
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

// break and continue

// for(let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Got 5")
//         break
//     }
//     console.log(`Value of i: ${i}`);
// }
for(let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Got 5")
        continue
    }
    console.log(`Value of i: ${i}`);
}