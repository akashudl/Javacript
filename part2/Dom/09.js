//innerHTML
// under header tag in index .html there are many tage so that is called inner html
const headline=document.querySelector(".headline")
// console.log(headline.innerHTML)//to get inner html 

headline.innerHTML="<h1>Inner Html chnaged<h1>";
headline.innerHTML+="<button class=\"btn btn-headline\">Learn more </button>"
console.log(headline.innerHTML)


