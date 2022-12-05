//param destructing 


//object 
//react

const person={
    firstname:"akash",
    gender:"Male"
}

// function printdetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
//     console.log(obj.email);
// }
function printdetails({firstname, gender}){
    console.log(firstname);
    console.log(gender);
    console.log(email);
}

printdetails(person);