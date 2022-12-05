// const userMethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} years`
//        },
//       is18:function(){
//             return this.age >=18;
      
//        },
//        sing:function(){
//            return "la la laaa laaa "
//        }
      
// }



function createUser(firstName,lastname,email,age,address) {
    // const user={};
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
  
 }
 const user1=createUser('Akash','pandit','akashudl50@gmail',24,"myaddress");
 const user2=createUser('Saurav','singh','akashudl50@gmail',24,"myaddress");
 const user3=createUser('dvd','pas','akashudl50@gmail',24,"myaddress");
 createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years`
 }
 createUser.prototype.is18=function(){
    return this.age >=18;
 }
 createUser.prototype.sing=function (){
    return "la la laaa laaa";
}
 

 console.log(user1.about());
 console.log(user1);
  console.log(user2.is18());
  console.log(user2.sing());
//  const is18=user1.is18();
//  const about=user1.about();
//  console.log(about);
//  console.log(is18);