 function ak(){
     return new Promise((resolve, reject) =>{
         const value=true;
         setTimeout(() =>{
             if(value==true)
             resolve(true);
             else{
                 reject(true)
             }
         },2000) 
        
        })
 }
 ak().then(
     (myval)=>{
         console.log(myval +"after 2 sec")
     }
 ).catch((err)=>{
     console.log(err+"after2 sec ")
 })