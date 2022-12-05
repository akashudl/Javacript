//lexial scope


function myapp(){
    const myvar1="value1"
    function myfun(){
               const myvar1="value59";
              console.log("inside function ",myvar1);
    }
    const myfunc2=()=>{

    }
    const func3=function(){

    }
    console.log(myvar1);
    myfun();
}
myapp();
 

//lexial env is the function where the function is define 