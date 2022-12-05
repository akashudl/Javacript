const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");
// setTimeout(()=>{
//     heading1.textContent="Heading 1 "
//     heading1.style.color="violet"
//     setTimeout(()=>{
//         heading2.textContent="Heading 2 "
//         heading2.style.color="purple"
//     },1000)
// },1000)
function chnagetext(element,text,color,time,onsuccess,onfaliure){
    setTimeout(function(){
        if(element){
            element.textContent = text;
            element.style.color = color;
            onsuccess();
        }
        else{
            if(onfaliure){
                onfaliure();
            }
        }
    },time)
}
//pyramid of dom
chnagetext(heading1,"one","green",1000,()=>{
    chnagetext(heading2,"two","pink",1000,()=>{
        chnagetext(heading3,"three","violet",1000,()=>{ 
            chnagetext(heading4,"four","red",1000,()=>{ 
                chnagetext(heading5,"five","blue",1000,()=>{chnagetext(heading6,"six","green",1000,()=>{  chnagetext(heading7,"seven","green",1000,()=>{ 
                    chnagetext(heading8,"Eight","green",1000,()=>{ 
            
                    },()=>{
                        console.log("Heaidng 1 does not exist")
                    })
            
                },()=>{
                    console.log("Heaidng 1 does not exist")
                })
            
                    },()=>{
                        console.log("Heaidng 1 does not exist")
                    })
                },()=>{
                    console.log("Heaidng 1 does not exist")
                })
            },()=>{
                console.log("Heaidng 1 does not exist")
            })
        },()=>{
            console.log("Heaidng 1 does not exist")
        })

 },()=>{
        console.log("Heaidng 1 does not exist")
    })
},()=>{
    console.log("Heaidng 1 does not exist")
})
