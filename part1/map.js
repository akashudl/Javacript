const numbers=[4,2,5,6,8]

const square=numbers.map((i,index)=>{ 
     return i**2;
});
console.log(square)


const users=[
     {firstname: 'John', age:23},
     {firstname:'Saurav',age:24}
 ]
 const user=users.map((user)=>{
      return user.firstname
 })
 console.log(user)