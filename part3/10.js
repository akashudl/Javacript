//promise .resolve 
//promise Chaining 
const promise =Promise.resolve(5);
promise.then(value=>{
    console.log(value);
});

//then always return promise

function mypromise(){
    return new Promise((resolve, reject) =>{
        resolve("foo")
    }
    )
}
// Promise.resolve return tghe promise 
//[promise chaining ]
mypromise().then(value=>{
    console.log(value);
    value+="bar"; //
    return value; // this is return again a promise and we can again call then and get Updated value from
    // interall javascript is doing like this
    //return  Promise.resolve(value);
}).then((value)=>{
    console.log(value)
    value+="baaz";
    return value; // this is return again a promise and we can again call then
}).then((value)=>{
    console.log(value)
    
    return value; // this is return again a promise and we can again call then
})