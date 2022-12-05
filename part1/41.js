//find method lion
const myarray=["hello","cat","dog","lion"]
function islength(string){
    return string.length ===3;
}

const ans=myarray.find((string)=>{
   return string.length==3
  
})
console.log(ans);


const user=[
    {userid:1,username:"harshit"},
    {userid:2,username:"Akash"},
    {userid:3,username:"saurav"},
    {userid:4,username:"jasprit"},
    {userid:5,username:"df"},
];
const myuser =user.find((user)=>user.userid===3)
console.log(myuser.username);