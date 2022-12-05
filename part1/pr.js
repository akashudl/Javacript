
// ////////////////////////////////Find Sqaure root Of element 
// // const arr=[25,36,49,64,81];

// // const ak=arr.map((i)=>{
// //     for(j=0;j<10;j++)
// //     {
// //         if(j*j===i)
// //          return j;
// //     }
// // })
// // console.log(ak)

// // multiply each element by 2 and return element which is greatert than 10
// // map function has an ablity to chain up with other  methods  reduce(),sort(),filter()
// const arr1=[2,3,4,6,8]
// // // const newArr=arr1.map((i)=>{
// // //     return(i*2)>10?i*2:""
    
// // // })
// const newArr =arr1.map((i)=>{
//     return i*2;
// }).filter((i)=>{
//   return i>10;
// }).reduce((acc,i)=>{
//     return acc+i;
// })
// console.log(newArr)




// let arr=[5,6,2]
// let sum=arr.reduce((acc,currele,i,arr)=>{
//     return acc+currele;
// })
// console.log(sum);


///flatenen ana array
//converting 2d and 3d array in 1 dimensional aaray
const arr2=[
    ['zone1','zone2'],
    ['zone3','zone4'],
    ['zone5','zone6'],
];

let flatarr=arr2.reduce((acc,currele) =>{
    return acc.concat(currele)
})
console.log(flatarr);