const body=document.body;
body.style.backgroundColor="#fff";

const heading =document.getElementById("root");
// heading.style.color="#fff"
// heading.style.fontSize="100px"
//In single line element 
heading.style.cssText="color:green;font-size:100px;padding:40px"

const divChilds=document.getElementsByClassName("item");
//console.log(divChilds[2])
divChilds[2].style.color="red"
divChilds[4].style.color="cyan"
divChilds[0].style.color="blue"

const divs =document.getElementsByTagName("div")
divs["parent"].style.backgroundColor="green"
//console.log(divs[3].textContent)
divs[3].textContent="Abra ka Dabbra"