// Immediate Invoked Function Expression (IIFE)
// IIFE is a function which immediately executes after it's creation, encapsulating code and maintaining a clean global scope.
// global scope ke variables se pollution hoti hai isliye sometimes we need to use IIFE.

(function game(){  // the function has a name, hence this is called a named IIFE
    console.log("Start the game")
})();   // use ';' at the end if you are using multiple immediate functions

( () => {  // also works with arrow functions
    console.log("Start the game")
} )();  // use ';' at the end of immediate functions for the next one to execute

( (name) => {
    console.log(`Hello ${name}`)
} )("Pratik")