//default paramter 

function addtwo(a,b=0){
    return a + b;
}
console.log(addtwo(4))//if we dont pass the b value then in the function b will automatically set b=0 because
//we already defined b=0; in function addtwo  
