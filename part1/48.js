//sets (it is iterable) 
//store data 
//set also have its own ,method 
//no index-based access to
//order is not guranteed
//unique iems only(no duplicates allowed)
//sets we can store diffrent data types

// const numbers=new Set([1,2,3,3]);
// console.log(numbers);
const items=['item1','item2','item3'];
const numbers=new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2);//if we try to add two time "2" it will not take since sets does not contain duplicate items
// numbers.add(['item1','items2']);//this will addedd
// numbers.add(['item1','items2']);// this will also be added to set since both the upper one add and this one is same but the array have diffrent refrence address so it will store in sets
// numbers.add(items); // this will added one time since the array conatin same refrence type 
// numbers.add(items);
// //to check if no  is presnt in set or not in array and it will return true and false
// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }

numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
//iterabel
for( let num of numbers ){
    console.log(num);
}

// when to use set 
//set is used when you have uniquie value 

//to find the length of the set use for lopp to iterate and increase the counter 

console.log(numbers);