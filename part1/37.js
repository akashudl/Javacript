//map method 

const number =[3,4,6,1,8];
const square =function(number ){
    return number*number;
}
number.map(square)//map take input as callback function
//map function always make new array
// when ever you are using map please use return keyword to return some value
const squarenumber=number.map(square)
console.log(squarenumber);
// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);
