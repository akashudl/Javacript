console.log("script start");
const bucket=["Coffee",'chips','Vegetables','salt','rice']
const friedRicePromise=new Promise((resolve,reject)=>{
         if(bucket.includes("Vegetables")&&bucket.includes("salt")&&bucket.includes("rice"))
         {
             resolve({value:"friedrice"})
         }else{
             reject("could not make it ")
         }
});


friedRicePromise.then(  //this function is also provide by web browser but this function  when it come under execution time it will wait in Microtask queue all the promise will come Under Micortask queue

// the main diffrence between Microtask queue and callback queueu is that   while execution when the function are function are wiating in each of like settimeout is waitibng in callback queue and then method is waitng in micortask queue then while our call stack become free then the first priority is that our all the mathod which are waiting  in Microtask queue will vfirst come under call stack and perform the task and execute the code after  the task which are waiting in the Call back queue will come 

    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })
setTimeout(()=>{  // this function will be provided by the browser and while execution it will go in callback queue 
  console.log("hello from setTimeout")
},0)
for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")


// /// output 
// //Script start
// 0.4083921332558771 0
// 0.2273994252055067 1
// 0.6664143 2
// 0.3259625373726731 3
// 0.9541236444671342 4
// 0.2602592583630208 5
// 0.7556400855843337 6
// 0.517797235108254 7
// 0.09129992994838143 8
// 0.235364161231/ 0.21355749559754322 10
//......
// 0.6782451935799179 96
// 0.7451261780133334 97
// 0.6009901215940676 98
// 0.3551376452391293 99
// 0.3331897959501282 100
// script end!!!!
// lets eat  {value: 'friedrice'}
// hello from setTimeout
// liner-core.be.js:266 [Violation] 'setTimeout' handler took 66ms
// liner-core.be.js:481 [Violation] 'setInterval' handler took 58ms