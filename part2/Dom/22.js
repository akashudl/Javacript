const btn=document.querySelectorAll("button");
console.log(btn)
// for(let button of btn){
//     button.addEventListener("click",function(){
//         console.log(button.textContent)
//     })
// }
// YOU CAN USE ANY LOOP
// for(let button of btn){
//     button.addEventListener("click",()=>{
//         // console.log(button.textContent)
//         // console.log(this.textContent)// FORT ARROW FUNCTION THIS WILL BE SHOWING THE WINDOW OBJECT
//     })
// }
btn.forEach(function(button){
    button.addEventListener("click",function(){
          console.log(button.textContent)
})
})