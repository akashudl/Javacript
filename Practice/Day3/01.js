const firstName ="Akash"
const lastName ="Pandit"
const age ="24"
const isMarried="Na"
console.log(typeof firstName)
console.log(typeof age) // typeof method is used to check the datatype of variable name
const a =null
console.log(typeof a) //typeof of the null value is object is deafult behaviour of javascript

console.log('10'===10) //return false since === use  both value datatype and have same value or not 
console.log('10'==10) // return true it checks only that both values are true or not 


const now=new Date();
console.log(now)

const y=now.getFullYear()
const m=now.getMonth()+1
const d=now.getDate();
const ho=now.getHours();
const min=now.getMinutes();
console.log(`${y}-${m}-${d} ${ho}:${min}`)