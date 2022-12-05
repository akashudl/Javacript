const allbutton=document.querySelectorAll('button')
allbutton.forEach(button=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target)
        e.target.style.backgroundColor="orange"
        e.target.style.color="black"
    })
})