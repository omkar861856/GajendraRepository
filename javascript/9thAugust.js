// array

// different types of functions

//IIFE - immediately invoke function expression

((demo) => {
  console.log("Hello from IIFE " + demo);
})("demoText");

// return keyword

const demo = function () {
  // logic 3

  return 3;
};

console.log(demo());

// map

let numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value) => {
  return value * 2;
});

console.log(newNumbers);

// reduce - modern js methods

const sum = numbers.reduce((a, c) => {
  return (a += c);
}, 0);

console.log(sum);

// filter

const filterEven = numbers.filter((value) => {
  return value % 2 == 0;
});

console.log(filterEven);


