const a = document.getElementsByClassName('box')

for(let i = 0; i<a.length; i++) {
    a[i].addEventListener('mouseover', function (){
        a[i].classList.toggle('selected')
    }) 
}


const emptyDiv = document.createElement('div')

emptyDiv.id = 'demo';

const paragraph1 = document.createElement('p')

paragraph1.innerText = "Created with JS"

emptyDiv.appendChild(paragraph1)

document.body.appendChild(emptyDiv)

const paragraph2 = document.getElementById('cloning').cloneNode(true)

document.body.insertBefore(paragraph2, emptyDiv)

const p3 = document.getElementById('p3');


const body = document.querySelector("body");
const clickTarget = document.getElementById("click-target");
const mouseOverTarget = document.getElementById("mouse-over-target");

let toggle = false;
function makeBackgroundYellow() {
  body.style.backgroundColor = toggle ? "white" : "yellow";

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow, false);

mouseOverTarget.addEventListener("mouseover", () => {
  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});







