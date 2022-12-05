// splice method
//start ,delete ,insert
const myarray=['item1','item2','item3']

//delete method
//myArray.splice(1,1);
//insert 

// myarray.splice(1,0,'inserted item ');
// // const deleted = myarray.splice(1,1);
// console.log(myarray)

//insert and delete simantenously
const deleteditem=myarray.splice(1,2,"inserted item1","inserted item2")
console.log(deleteditem);
console.log(myarray);
