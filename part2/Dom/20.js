//intro to event 
//click
//button press
//mouse over 
//event add karne ke 3 tarika 
//1.)onClick

const btn=document.querySelector(".btn-headline")
//method --addEventlistner
// function clickMe(){
//     console.log("You clicked me")
// // }
// btn.addEventListener("click",clickMe)
btn.addEventListener("click",()=>{
    console.log("Arrow Function clicked")
})