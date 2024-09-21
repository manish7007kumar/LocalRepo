
// const heading =document.createElement("h1")
// heading.textContent="Hello world"
// heading.style.color="white"

// //Insert an element
// const body =document.body
// body.style.backgroundColor="black"
// body.appendChild(heading)
const p1 =document.createElement("p")
const p2 =document.createElement("p")

p1.textContent="Para child-1"
p2.textContent="Para child-3"

const div=document.querySelector("#box")

div.insertAdjacentElement("afterbegin",p1)
div.insertAdjacentElement("beforeend",p2)