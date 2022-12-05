const start = document.querySelector("#show");
const end = document.querySelector("#end")
const h1 = document.querySelector("h1")
let num =0;
let timeref
const showmynum=()=>{
    h1.innerHTML = "Loading ................"
   timeref= setInterval(()=>{
        h1.innerHTML=`${num}`
        num++;
    },2000)
}
end.addEventListener('click',()=>{
    clearInterval(timeref)
})
start.addEventListener('click', showmynum)