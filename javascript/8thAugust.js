//objects are reference type

// string type

// copy by reference and copy by value

// object , arrays (special objects) , functions



let a = "Hello World";
let b = a;

b = "Hello Universe";

console.log(a);
console.log(b); 

const myObj = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
}

myObj.name = "Jane Doe"

let myObj2 = myObj;

myObj2.age = 32;

console.log(myObj)






