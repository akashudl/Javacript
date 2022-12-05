//how to iterate  object ` 
const key="email"
const person={
    name:"harshith",
    age:22,
    "person hobbies":["guitar","sleeping"]
}

for(let key in person){
    console.log(person[key])
}
// for(let key in person){
//     console.log(key,":",person[key])
// }
console.log(typeof Object.keys(person));
const val=Array.isArray((Object.keys((person))))