const userMethods={
    about:function(){
        return `${this.firstName} is ${this.age} years`
       },
      is18:function(){
            return this.age >=18;
      
       },
       sing:function(){
           return "la la laaa laaa "
       }
      
}



function createUser(firstName,lastname,email,age,address) {
    // const user={};
    const user=Object.create(userMethods);
    user.firstName=firstName;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;//passing the refrence
    user.is18=userMethods.is18;//passing the refrence value of the object
    user.sing=user.sing;
    return user;
  
 }
 const user1=createUser('Akash','pandit','akashudl50@gmail',24,"myaddress")
 const user2=createUser('Saurav','singh','akashudl50@gmail',24,"myaddress")
 const user3=createUser('dvd','pas','akashudl50@gmail',24,"myaddress")
  console.log(user1.about());
  console.log(user2.about());
  console.log(user3.sing());
//  const is18=user1.is18();
//  const about=user1.about();
//  console.log(about);
//  console.log(is18);