class createUser{
    constructor(firstName, lastname,email,age,address){
        console.log("constructor called")
        this.firstName=firstName;
        this.lastname=lastname;
        this.email=email;
        this.age=age;
        this.address=address;
        
    }
    about(){
        return `${this.firstName} is ${this.age} years`
    }
    is18(){
            return this.age >=18;
        }
             sing (){
                return "la la laaa laaa";
}
        }
        const user1=new createUser('Akash','pandit','akashudl50@gmail',24,"myaddress");
         const user2=new createUser('Saurav','singh','akashudl50@gmail',24,"myaddress");
         const user3= new createUser('dvd','pas','akashudl50@gmail',24,"myaddress");
         console.log(user1.is18());
         console.log(Object.getPrototypeOf(user1)); 