//new keyword 

function createuser(firstname,age){
    this
    this.firstname=firstname;
    this.age=age;
}

createuser.prototype.about=function(){
    console.log(this.firstname,this.age)
}
const user1=new createuser("Akash",40);

//new keyword 
//1.) empty object this ={}
// 2.) return this
// Object.create(createUser.prototype);  this will be done by the new keayword
console.log(user1);