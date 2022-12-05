//setInterval
console.log("script start");
setInterval(()=>{
    console.log(Math.random()); //math.random function give random number  0.1 to 0.9 so if you want randome no from 1 t 10 you can do Mtah.random()*10
},1000)// it will try to execute this set interval code only when the call stack is free and it will execute the code after every 1 sec since we specified the time also this function also is provided by bowser 
console.log("script end");
