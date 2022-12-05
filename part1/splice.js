const myarray=["item1","item2","item3"];
myarray.splice(1,0,"inserteditem");
console.log(myarray)
const deleted=myarray.splice(0,2);
console.log(deleted)