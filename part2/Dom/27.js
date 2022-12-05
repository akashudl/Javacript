const todoForm=document.querySelector(".form-todo");
const todoinput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");
console.log(todoinput);
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();// to prevent page from reload *****vvi
    const newTodoText=todoinput.value;
    const newli=document.createElement("li");
    const newliInnerrhtml=`<li>
    <span class="text">${newTodoText}</span>
    <div class="todo-button">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>
</li>`;
newli.innerHTML=newliInnerrhtml
todoList.append(newli);
todoinput.value=""
    
})

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const lispan=e.target.parentNode.previousElementSibling
          lispan.style.textDecoration="line-through"
    }
    if (e.target.classList.contains("remove"))
    {
        const targetli=e.target.parentNode.parentNode;
        targetli.remove();
    }
   
})