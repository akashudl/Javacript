// // // // var a=5
// // // // console.log(a)
// // // "use strict";
// // a()
// // function a(){
// //     console.log("Here we are")
    
// // }
// // console.log(this);


// // k="nfsdv"
// // console.log(k)


// // setTimeout(function(){
// //     console.log("Script")
// // },2000)


// function a(b){
//     console.log("In callback")
//     b()
// }


// function b(){
//     console.log("callback function")
// }
// console.log(a(b))


const user=[
    {firstname:"Akash",lastname:"Pandit",age:25},
    {firstname:"Saurav",lastname:"Singh",age:25},
    {firstname:"Sunny",lastname:"Pandit",age:32},
]

const output1=user.reduce((acc,curr)=>{
    if(curr.age<30)
       acc.push(curr.firstname)

       return acc;
    
},[])
console.log(output1)

// const output=user.filter((x)=>{
//     return x.age<=30;
// }).map((x)=>{
//     return x.firstname;})

// console.log(output)