


function createUser(firstName,lastname,email,age,address) {
    // const user={};
    
    this.firstName=firstName;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
    
  
 }
 const user1=new createUser('Akash','pandit','akashudl50@gmail',24,"myaddress");
 const user2=new createUser('Saurav','singh','akashudl50@gmail',24,"myaddress");
 const user3= new createUser('dvd','pas','akashudl50@gmail',24,"myaddress");
 createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years`
 }
 createUser.prototype.is18=function(){
    return this.age >=18;
 }
 createUser.prototype.sing=function (){
    return "la la laaa laaa";
}
 

//  console.log(user1.about());
//  console.log(user1);
//   console.log(user2.is18());
//   console.log(user2.sing());
//  const is18=user1.is18();
//  const about=user1.about();
//  console.log(about);
//  console.log(is18);
for(let key in user1)
{
    if(user1.hasOwnProperty(key)){ //when you want only to print keys which is not in prototype
      console.log(key)
    }
}