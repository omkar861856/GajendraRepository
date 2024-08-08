

let a = "  Hello world! from paris olympics - world   "

// string manipulation methods

console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.length)

// string methods

console.log(a.charAt(0))
console.log(a.indexOf("world"))
console.log(a.lastIndexOf("world"))
console.log(a.includes("world"))
console.log(a.startsWith("Hello"))


// more string methods

console.log(a.slice(6, 11))
console.log(a.substring(6, 11))
console.log(a.replace("world", "Earth"))
console.log(a.split(" "))
console.log(a.concat(" - Paris Olympics"))

//misc string methods

console.log(a.trim())
console.log(a.repeat(3))
console.log(a.padStart(50, "-"))
console.log(a.padEnd(50, "-"))

// cannot use js reserved words - let for if 

// string template literals

let name = "John"
let age = 30
console.log(`My name is ${name}, and I am ${age} years old.`)

// regular expressions - validation

let regex = /\bworld\b/g
console.log(a.match(regex))
console.log(a.split(regex))

// a.includes and a.match

let no = "+91888888888"

let usaNo = /^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/

let africaNo = /^0[678]\d{8}$/

let indNo = /^(?:(?:\+|0{0,2})91(\s*[-\s]\s*)?|[0]?)?[789]\d{9}$/

if(no.match(indNo)){
    console.log("Valid US phone number")
}
else if(no.match(indNo)){
    console.log('Valid africa number')
}
else if(no.match(indNo)){
    console.log('Valid india number')
}
else{
    console.log("Invalid US phone number")
}

let email = "john.doe@example.com"

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

if(email.match(emailRegex)){
    console.log("Valid email address")
}else{
    console.log("Invalid email address")
}


// functions

function greet(name) {
    console.log(`Hello, ${name}!`)
}

greet("John");
greet('Jane');
greet("Jacob");

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));

function average(a, b, fn){
    let avg =  fn(a,b) / 2;
    return avg;
}

console.log(average(33, 55, sum))





