//event object 
const btn=document.querySelectorAll("button");
console.log(btn)
// firstbutton.addEventListener('click',function(e){
//     console.log(e);
// })
//jav bhi mai kisi bhi element event listner add hoga 
//js engine  -- line by line execute the code

//browser ----- js engine +extra feature 
//browser ----- js engine +WebAPi
//jab browser ko pota chala ki user ne event ma perform kiya 
//jo hum listen kar rahe hai
//browser -----2
//1. callback function hai vo js engine ko degi
//2. callback function ke sath vo jo event hua hai uski information bhi dega 
// second wala point ki info object mai milegi
btn.forEach(function(button){
    button.addEventListener("click",function(e){
         console.log(e.target )
})
})