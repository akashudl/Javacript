//spread operator

const array1=[1,2,3]
const array2=[5,6,7]

// const newArray=[...array1,...array2];
const newArray=[..."123456789"]
console.log(newArray);

const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key3:"value1",
    key4:"value2"
}
// const newObject ={...obj1,...obj2};
// const newObject ={...["item1","item2"]}
const newObject={..."abcdefghijklm"}
console.log(newObject);
