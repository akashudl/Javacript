//// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 
// object literal keys can only be string or symbol if we give key as number then it will automatically convert to string
// key -> string 
// key -> symbol
//  const person ={ //object literals
//      firstName: 'John',
//      age:7,
//      1:"one"
//  }
//  console.log(person['1']) // person['1']==person.1
//  for(let key in person){
//      console.log(typeof key)
//  }

// const person = new Map();
// person.set('firstName','Akash'); //set(key,value)
// person.set('Age','7');
// person.set(1,'one')
// // console.log(person.firstName)//it will give undefined as output so you have to use get method of map
// console.log(person.get('age'));
// console.log(person.get('1'));
// // person.set([1,2,3],'onetwothree');
// // person.set({1: 'one'},'onetwothree');
// console.log(person.keys());// to get all the keys in the map
// // for(let key of  person.keys()){
// //     console.log(key ,typeof key);
// // }
// //  for(let [key, value] of person){
// //         // console.log(Array.isArray(key));
// //         console.log(key, value)
// //     }
// for(let [key,value] of person){
//     console.log(key,value); //Array.isArray will return true if the value is in the form of array
// }
//realistsic example

const person1 = {
    id: 1,
    firstName: "Akash"
}
const person2 = {
    id: 2,
    firstName: "Saurav"
}
const a=new Map();
a.set(person1,{age:8,gender:"male"});
console.log(a);
a.set(person2);
console.log(person1.id);
console.log(a.get(person1).gender);