//static list vs Live list 
//QueryselectorAll hamein static list degi
//getElementBysomething hamein live list degi
// const listItem =document.querySelectorAll(".todo-list li");
const ul=document.querySelector(".todo-list")
const listItem=ul.getElementsByTagName("li")// it will give live list 
const sixthli=document.createElement("li")
sixthli.textContent="item 6"

ul.append(sixthli)
console.log(listItem);

