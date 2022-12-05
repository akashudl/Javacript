//loop
//get multiple eleemnts by using queryselectorAll
//array like object ----> indexing ,length,property
// const allnavaitems=document.getElementsByClassName("nav-items");
// const allnavaitems=document.getElementsByTagName("a");
// console.log(allnavaitems.length)
//We can't use for Each loop to iterate through HtmlCollection 
//simple for loop
//for of loop 
//forEach

// for(var i=0;i<allnavaitems.length;i++){
//     allnavaitems[i].style.color="orange"
//     allnavaitems[i].style.fontWeight="bold"
// }
// htmlcollection to array
// const navitems= Array.from(allnavaitems) //after converting this you can use forEach loop
// navitems.forEach(element => {
//     element.style.color="orange"
//     element.style.fontWeight="bold"
// });

// for(let navitem of allnavaitems){
//    navitem.style.color="orange"
//     navitem.style.fontWeight="bold"
// }

let navitems =document.querySelectorAll("a");
navitems=Array.from(navitems)// chnage object to array value 
console.log(Array.isArray(navitems))// to check the valu we are geeting is array  or not 
//simple for loop
//for of loop 
//forEach
for(var i=0;i<navitems.length;i++){
    navitems[i].style.color="orange"
    navitems[i].style.fontWeight="bold"
    }
console.log(navitems);
