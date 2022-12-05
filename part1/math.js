/***********************Math Object in javaScript *****************************************/
// The JavaScript math object allows you to perform math operations


// console.log(Math.PI)

// let a= 10.256;
// //Math.round()
// // return the value of x rounded to its nearest integer
// console.log(Math.round(a))


//Math.pow()
//Math.pow(x,y) return the value of x with X^power of you
// console.log(Math.pow(2,3))
// console.log(2**3)


//Math.Sqrt()
//Math.sqrt((x)) returns the square root of X 


// console.log(Math.sqrt(25)) //5


//Math.abs(Math.abs())
//Math.abs returns the absolute(positive) value of x
// console.log(Math.abs(-55))

//Math.ceil();
//Math.ceil(x) returns the value of x rounded up to the nearest integer

// console.log(Math.ceil(4.4)) // Output -->5

//math.floor
//Math.floor(x) returns the value of x rounded down to the nearest integer
//jo bhi no hai decimal sa pahela wahi output milega 
// console.log(Math.floor(4.7))
// console.log(Math.floor(99.1))


//Math.min() can be used to find the min value in the arguments
//Math.max() can be used to find the max value in the arguments

// console.log(Math.min(0,234,1,3,45,7,8,-9))
// console.log(Math.max(0,234,1,3,45,7,8,-9))

// //Math.random()
// //Math.random return  a random number between 0 to 1  

// console.log(Math.floor(Math.random()*10))

//Matyh.trunc() 
//the trunc () methods return the integer  part of number that
//jo bhi no hai decimal sa pahela wahi output milega 
console.log(Math.trunc(4.6))
console.log(Math.trunc(-99.6))

// if the arguments is positive number then math.trunc() is equivalent to the math.floor
//otherwise math.trunc() is equivalent to math.ceil()