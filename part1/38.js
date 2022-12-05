//filter method
const number=[1,3,4,5,6,7]
const check=function(number){
    return number%2===0
}
const even=number.filter(check);//it will also create array but the store inly when the condition is true
console.log(even);
const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);