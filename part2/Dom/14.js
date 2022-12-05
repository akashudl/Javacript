//document .create element 
//append
//prepend
//remove
// const newtodo =document.createElement("li")
// // const newtodotext=document.createTextNode("Teach Student")
// newtodo.textContent="Teach Student"
// const  todolist=document.querySelector(".todo-list");

// todolist.prepend(newtodo);// it will add elements to starting 

// todolist.append(newtodo);
// console.log(newtodo)
// const todo1=document.querySelector('.todo-list li');
// todo1.remove();
//before method 
const newTodoItem=document.createElement('li');
newTodoItem.textContent="Teach Student";
const  todolist=document.querySelector(".todo-list");
// todolist.before(newTodoItem)//it will insert outside and before of the to do list 
todolist.after(newTodoItem);//it will insert outside and after of the to do list 
