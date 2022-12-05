//setTimeout --->Ye function tab use Hota hai jab hmlogo ko chaiye ki ye function kam kam etna samaya baad execute hojaye isma ek function pass karn hota ha as parameter and and time also

// this is the example of asynchronous programming in which code is not executed line by line 

//setTimeout is provided by web browsers
console.log("Script Start");

const id=setTimeout(function(){
    console.log("Hello World after 1 sec ")
},0);

 for(let i=1;i<100;i++)
 {
   console.log("....")
 }
 console.log("Setttimeout id is ",id);
 console.log("clearing time out ");
 clearTimeout(id);//is used to remove the function from calllbqck queue means i dont want to run this function for now whoich we hacve set in id variable 
 console.log("Script End")

