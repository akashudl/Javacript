//this keyword inside 
const btn=document.querySelector(".btn-headline")
btn.addEventListener("click", function(){
    console.log("You clicked me !!!")
    console.log("value of this")
    console.log(this)// output of this --->  <button class="btn btn-headline" style="user-select: auto;">Learn More</button>
})
function ak(){
    console.log("You clicked me !!!")
    console.log("value of this")
     console.log(this) //output of this --->  <button class="btn btn-headline" style="user-select: auto;">Learn More</button>
}
btn.addEventListener("click", ak)


// btn.addEventListener("click", () =>{
//     console.log("You clicked me !!!")
//     console.log("value of thsi")
//     console.log(this)//for the case of arrow function it will show window objectb 
// })