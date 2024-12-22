const coding = ["js", "cpp", "python", "ruby", "java"]

// coding.forEach( function(item) {console.log(item)} ) // callback function

// coding.forEach( (item) => {console.log(item)} )

function printMe(item) {
    // console.log(item)
}

// coding.forEach(printMe) // giving the reference of the function

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr) 
} )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})