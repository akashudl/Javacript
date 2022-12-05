// function expression
// function singhappybirthday(){
//     console.log("happybirthday to you")
// }
const singhappybirthday= function(){
    console.log("happybirthday to you");
}

singhappybirthday();
const add=function (a,b){
    // console.log(a+b);
    return a+b;
}
function evenodd(a){
    return a%2===0;
}


const returnvalued=add(2,4);
console.log(returnvalued);
const a=evenodd(3);
console.log(a);
console.log(fistcharcter("akash")); 
function fistcharcter(anything)
{
    return anything[0];
}