// for loop

const str = "string";

const arrString = str.split("");

console.log(arrString);

// 0 to 6

for (let i = 0; i < arrString.length; i++) {
  console.log(arrString[i]);
}

function greet(){
    const i = "greetings...";
    return i

}

console.log(greet())

// while loop

// while (){

// }

//do while

let i = 1;
do {
  console.log("working...");
  i++;
} while (i < 3);

// for in loop

const myObj = {
  name: "John",
  age: 30,
  city: "New York",
};

myObj.name = "Jane";

console.log(myObj.name)

for (let key in myObj) {
  console.log(`${key} is ${myObj[key]}`);
}

// for of loop For arrays and strings

for (let value of str) {
  const upper = value.toUpperCase();
  console.log(upper);
}

// break e.g

const numArray = [1, 4, 5, 6, 7, 12, 2, 3, 13, 14, 15, 16, 17, 8, 9, 10, 11];

for (let v of numArray) {
  if (v === 12) continue;

  console.log(v);
}

// create an array with for loop; array function object

const newArray = [];

for (let i = 0; i < 5; i++) {
  newArray.push(i);
}

console.log(newArray);

// create a 2D array with for loop

const multArray = [2];

for (let i = 0; i < 5; i++) {
  multArray[i] = [];
  for (let j = 0; j < 3; j++) {
    multArray[i].push((i + j) * j);
  }
}

console.log(multArray);

multArray.forEach(e => e.forEach(f=>console.log(f)));


//map , reduce, filter...

// strings, numbers, booleans, null, undefined, objects, arrays, function...

//window object

// const car = {
//     brand: "Tesla",
//     model: "Model X",
//     year: 2021,
//     startEngine: function() {
//       console.log("Engine started...");
//     },
//     log: function(text){
//         console.log(text);
//     }
// }

// const promptValue = (window.prompt("Write anything"))

console.log(window)

function successCallback(position){
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);}

function errorCallback(error){
    console.log(`Error: ${error.message}`)
}

const location1 = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

console.log(location1);













