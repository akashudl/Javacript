//importan array method


//foreach
//map
//filter
//reduce
// const number=[4,2,5,8]
// function print(i,index)
// {
//     console.log("inde is ",index);
//     console.log(i*2);
// }
// number.forEach(print);

// number.forEach(function(number,index){ //anyonums function the function which doe have name
//     console.log("inde is ",index);
//     console.log(index*2);
// })

const users = [   //array with object 
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user) {
//     console.log(user.firstName)
// })

users.forEach((user,index)=>{
    console.log(user.firstName,index)
})
users.forEach((user,index)=>{
    console.log(user.age,index)
})
