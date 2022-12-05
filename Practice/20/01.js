const classes=document.querySelector("h1")
const p = document.querySelector("p");
console.log(classes.textContent)
const h1length=classes.textContent
const arr=h1length.split(" ")
console.log(arr)
classes.innerHTML= `Asabeneh Yetayeh challenges in <span id="year">2020<span>`
let year = document.querySelector("#year");
let color;
const chameleon = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    year.style.color = color;
    year.style.fontSize='80px'
}
setInterval(chameleon, 1000)
classes.style.content='center'
classes.style.textAlign='center'
const h2=document.querySelector("h2")
console.log(classes)
h2.style.textAlign='center'
const title = document.querySelectorAll('li')

const titles = document.querySelectorAll('ul')
p.textContent = Date();
p.style.border = "solid"
p.style.width = "300px";
p.style.margin = "0 auto"

const chameleon2 = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    // year.style.color = color;
    p.style.backgroundColor = color;
}
setInterval(chameleon2, 1000)

titles.forEach((title, i) => {
  title.style.fontSize = '30px' // all titles will have 24px font size
 
    title.style.padding='80px'
    title.style.margin='20px'
    title.style.listStyle='none'

  
})



for(let i=0;i<title.length;i++){
   title[i].style.padding="20px"
   title[i].style.margin="5px"

   if(title[i].textContent.includes("Done")){
    title[i].style.backgroundColor="MediumSeaGreen"
   }
    else if(title[i].textContent.includes("Ongoing")){
        title[i].style.backgroundColor="yellow"
    }
    else 
    title[i].style.background="Tomato"
}
