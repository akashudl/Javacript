//clone using Object.assign

const obj={
    key1:"value1",
    key2:"value2"
};

// const obj2={...obj};//spread operartpr
const obj2=Object.assign({},obj);
obj.key="value3";
console.log(obj)
console.log(obj2)