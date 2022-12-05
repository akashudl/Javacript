//function inside function


const app=()=>{
    const myfunc=()=>{
        console.log("hello world from myfunction")
    }
    const addtwo=(num1,num2)=>{
        return num1+num2;
    }
    const mul =(num1,num2)=> num1*num2
    console.log("Inside app")
    myfunc();
    console.log(addtwo(2,3));
    console.log(mul(2,3));
}
app();