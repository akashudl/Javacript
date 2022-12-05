// const user={
//     firstName:"Akash",
//     lastname:"Pandit",
//     email:"akashudl50@gmail.com",
//     age:2,
//     address:"House Number,Colony,pincode,state",
//     about:function(){
//         return `${this.firstName} is ${this.age} years`
//     },
//     is18(){
//         return this.age >=18;
//     }

// }
// if we want create a object suppose 10000 like thh above one then
//it will take time show we create a function that  will take user input and return
// and conver t into object 
// and return it


function createUser(firstName,lastname,email,age,address) {
   const user={};
   user.firstName=firstName;
   user.lastname=lastname;
   user.email=email;
   user.age=age;
   user.address=address;
   user.about=function(){
    return `${this.firstName} is ${this.age} years`
   }
   user.is18=function(){
        return this.age >=18;
  
   }
   return user;
}
const user1=createUser('Akash','pandit','akashudl50@gmail',24,"myaddress")
console.log(user1);
const is18=user1.is18();
const about=user1.about();
console.log(about);
console.log(is18);