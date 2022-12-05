//array push pop


//array shift unshift

let fruits =["apple","mango","grapes"]
console.log(fruits);

//push
// fruits.push("banana")
console.log(fruits)
let poppedFruit=fruits.pop();
console.log(fruits);
console.log('popped fruit is', poppedFruit);
fruits.unshift("banana");
console.log(fruits);
//unshift function add elemnt to first index
//shift remove the e;eemnt 
let remove = fruits.shift();
console.log(remove);
//push and pop is fast comaper to shift and unshift 
//reason push and pop  add or emove eleent but for shift and unshift we have to first add in memory then remove and add
