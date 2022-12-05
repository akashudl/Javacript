let word='javascript'
word="fdgf"
console.log(word)
console.log('This is a backslash  symbol (\\)') 
console.log('In every programming language it starts with \"Hello, World!\"')

// --------------------------------------------------------------------------------------->
// Day 2 exercise 

let a="30 Days Of JavaScript"
let b="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let c="You cannot end a sentence with because because because is a conjunction"
console.log(a.toUpperCase())
console.log(a.substring(2))
console.log(a.includes("Script"))
console.log(a.split(" "))
console.log(b.split(","))
console.log(a.replace("30 Days Of JavaScript","30 Days Of Java"))
console.log(a.charCodeAt('j'))  //  return ASCII Value of character J
console.log(c.indexOf("because"))  // 
const d="Love is the best thing in this world. Some found their love and some are still looking for their love."
const array=d.split(" ")
console.log(array);
let i=0;
let count=0;
console.log(d.match(/love/gi).length)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.match(/\d+/g))
console.log(sentence.replace("%",""))
const salary= "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
const arr  = salary.match(/\d+/g);

const totalAnnualIncome = (+arr[0] + +arr[2]) * 12 + +arr[1]
console.log(totalAnnualIncome)
// while(i<array.length)
// {
//     if(array[i].includes("Love")||array[i].includes("love"))
//     {
//         count++;
//     }
//     i++;
// }
// console.log(count)
// let number = prompt('Enter number')
// let number2 = prompt('Enter number')
// let number3 = number2+number
// console.log(number3)