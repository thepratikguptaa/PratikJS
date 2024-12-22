const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

for (const key in myObject) {
    // console.log(`${key} is short for ${myObject[key]}`)
}

const programming = ["js", "cpp", "rb", "py"]
for (const key in programming) {
    // console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key) // not iteratable
}