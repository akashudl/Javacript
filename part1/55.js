
//Arrow function ka this nahi hota hai nahi
//agar this hota hai to wo apna surroondig sa leta hai 

const user1={
    firstName: 'John',
    age:8,
    about:()=>{
        console.log(this)
        console.log(this.firstName,this.age) // it will show output undefined because arrow function take this from it suurrounding 
    }
}

// user1.about()
user1.about.call(user1)