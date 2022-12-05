// const http=require('http');
// // const { json } = require('stream/consumers');
// const data = require('./data')// getting the data module data by oimporting it with filename


// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.write(JSON.stringify(data))
//      res.end();//noide js will don't knwo where to end the function
// }).listen(3006);

// const input=process.argv
// if(input[2]==="add"){
//     fs.writeFileSync(input[3],input[4])
// }else{
//     fs.unlinkSync(input[3]);
// }


// console.log(process.argv) // to gert the cmmnd line outpout 

// console.log(process.argv[3]) // to get the  specific value 

const fs= require('fs')
const path= require('path')
const dirPath= path.join(__dirname,'files')
for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+`/hello${i}.txt`,"a simple file")
}

fs.readdir(dirPath,(err, files) => {
    files.forEach((item) =>{
        console.log("file name is ",item);
    }
    )
})