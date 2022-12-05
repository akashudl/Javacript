//some old methods to support IE
//appendChild;
//insertBefore
//replaceChild;
//removeChild

const ul=document.querySelector(".todo-list")
const li=document.querySelector("li")
li.textContent="new todo"
const refrenceNode=document.querySelector('.first-todo')

ul.replaceChild(li, refrenceNode)