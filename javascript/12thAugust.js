const myObj = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

console.log(myObj.name)

const myArray = ['a', 'b', 'c', 'd', 'e', 'f']// special type of object

console.log(myArray);

const myConvertedObject = Object.entries(myArray)

console.log(myConvertedObject);

// object is by default mutable /changable

// large computation - 2 second - blocking

Object.freeze(myObj);

myObj.name = "Jane Doe"

console.log(myObj);

// array different methods

// for each 

// map 

// filter

// reduce

// for in

// objects questions , arrays and functions question.

// () =>{logic}

// audio fine/good - objects task = 2/3 more task sheet





