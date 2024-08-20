// DOM manipulation

function ChangeName(name) {
  const a = document.querySelectorAll(".paragraph");

  // object method
  for (let paragraph of a) {
    paragraph.innerText = "changed";
  }
}

// singular and prular

// 8 roughly

// strings, numbers, undefined, null, boolean - primitive types
// object, functions, arrays - reference types



function DisplayHello(){
const emptyDiv = document.querySelector('#demo1')
emptyDiv.innerHTML = `
<p>Hello world!</p>
`
}

const empty = document.querySelector("#result")

const a = document.getElementById('demoInput')
console.log(a)
a.addEventListener('change', (event)=>{
    empty.innerText = event.target.value
})







