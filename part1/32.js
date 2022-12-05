//rest parameter


function myfunc(a,b,...c){  //what ever the left value in that aguments we passed automatically will be converted in array  
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myfunc(3,4,5,6,7);