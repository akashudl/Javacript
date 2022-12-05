// Synchronous Programming 
// JavaScript is Synchronous Programming lang anf single Threaded
//it will execute the code one by one 
// console.log("Script Start")

// for(let i=1;i<1000;i++){
//     console.log("inside loop")
// }
// console.log("Script end")


console.log("Script Start")

setTimeout(()=>{
    console.log("hello  after 1 sec")
},1000);
console.log("Script End")