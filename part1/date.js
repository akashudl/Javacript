//new Date ()
//Date object are created with new Date constructor
// let currdate = new Date();
// console.log(currdate)
// console.log(currdate.toLocaleDateString());//4\12\2022
// console.log(currdate.toLocaleString()) //4/12/2022, 5:36:50 AM
// console.log(currdate.toString());//Tue Apr 12 2022 05:36:50 GMT+0530 (India Standard Time)
// //Date.now() returns the numeric value corresponding to the current -time number of millisecond elapsed timesince january 1jan 1970 00:00:00 UTC

// console.log(Date.now());


//new Date(year, month, day, hour, minute, second)
//7 numbers specifying the year,month  day,hour ,minute,second
//and millisecond in that order
//Note javascript count th month from 0 to 11
//jan is 0 and dec is 11
//mont argument is compulsary and year also
// var d=new Date(2021,5,24,10,33,30,0)
// console.log(d.toLocaleString())

//Dates method 
const current=new Date();
console.log(current.toLocaleString());
console.log(current.getFullYear());
console.log(current.getDay())
console.log(current.getMonth())
console.log(current.getDate())
