// //undertsnad callback\


// function gettwonumbersadd(number1,number2,callback) {
//     console.log(number1,number2);
//     const add=callback(number1,number2);
//     return add;
// }
// function add(number1,number2){
//     return number2+number1;
// }
// const print=gettwonumbersadd(4,5,add)
// console.log(print);

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
      onSuccess(number1, number2);
    } else {
      onFailure();
    }
  }
  
  function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
  }
  
  function onFail(){
      console.log("Wrong data type");
      console.log("please pass numbers only")
  }
  getTwoNumbersAndAdd(4, 4,addTwoNumbers,onFail);