const v8=require('v8')
// const fs=require('fs');//non global module beacuse we eneed to import this modukle to use
// const sk=require('fs').writeFileSync;// to import only that  function which  we use not to load whole fs whith all the function 
// console.log("Code step by step")//fs,buffer,http core module 
// fs.writeFileSync("hello1.txt","fbsghdfg");
// console.log("--->",__dirname);// check directory name which we are working
// console.log("--->",__filename);//Give the file name which we are working 
// console.log(v8.getHeapStatistics())
console.log(v8.getHeapSpaceStatistics());  

