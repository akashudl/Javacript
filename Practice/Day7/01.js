// function find(l,b,callback){
//     return callback(l,b);
// }
// function area(l,b){
//     return l*b;
// }
// function perimeter(l,b){
//     return 2*(l+b)
// }


// a=find(5,4,area)
// console.log("area of rectangle is : ",a)
// b=find(5,4,perimeter)
// console.log("Perimeter of rectangle is : ",b)
// /// Solve  Quadratic Equation 


// // function solveQuadratic(a,b,c){
// //     let discrimnator=b*b-4*a*c;
// //     if(discrimnator>0){
// //         root1=(-b+Math.sqrt(discrimnator)) / (2 * a)
// //         root2=(-b-Math.sqrt(discrimnator)) / (2 * a)
// //         console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// //     }
// //     else if (discrimnator==0){
// //         root1 = root2 = -b / (2 * a);
// //         console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// //     }
// //     else {
// //         let realPart = (-b / (2 * a)).toFixed(2);
// //     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
// //     console.log(
// //         `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
// //       );
// //     }

// // }
// // solveQuadratic(1, 4, 4) 


// function timeStr(){    
//     var t=new Date();
//     var date=t.getDate();
//     var month=t.getMonth();
//     var year=t.getFullYear();
//     console.log(date + '/'+ month + "/" + year +" "+t.getHours()+":"+t.getMinutes());
//       }
// timeStr()  

//Write a function which takes any number of arguments and return the sum of the arguments

// function arguments(...a){
//     let sum=0
//     for (const element of a) {
//       sum += element
//     }
// return sum
// }
// console.log(arguments(1,2,3,4))



// var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
// console.log(ip)


// function genMAC(){
//     var hexDigits = "0123456789ABCDEF";
//     var macAddress = "";
//     for (var i = 0; i < 6; i++) {
//         macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
//         macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
//         if (i != 5) macAddress += ":";
//     }

//     return macAddress;
// }

// console.log(genMAC())

// Declare a function name randomHexaNumberGenerator. When this function is called it 
//  generates a random hexadecimal number.
// The function return the hexadecimal number.
// function randomHexaNumberGenerator(){
//     let hexadecma="0123456789ABCDEF"
// let h=hexadecma.length
// var result=''
// for(let i=0;i<6;i++)
// { 
//     result+=hexadecma.charAt(Math.floor(Math.random () * h))

    
// }
// return result
// }

// console.log(randomHexaNumberGenerator())

//Write a function name rgbColorGenerator and it generates rgb colors.
// function rgbColorGenerator(){

//     red=Math.floor(Math.random() * 256);
//     green=Math.floor(Math.random() * 256);
//     blue=Math.floor(Math.random() * 256);
//     const rgb = `rgb(${red},${green}, ${blue})`;
//     return rgb
// }
// console.log(rgbColorGenerator())
// var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
// 		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
// 		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
// 		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
// 		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
// 		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
// 		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
// 		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
// 		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
// 		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

// // function arrayOfHexaColors(colorArray){
// //     const a=Math.floor(Math.random()*colorArray.length)
// //     return colorArray[a];
// // }


// // console.log(arrayOfHexaColors(colorArray))


// console.log(generateColors('hexa', 2))

// function generateColors(hexa,b){
//     const hexarray=[]
//     for(let i=0;i<b;i++){
//         const a=Math.floor(Math.random()*colorArray.length)
//         hexarray.push(colorArray[a]);

//     }
//     return hexarray;


// }
// // /Write a functions which checks if all items are unique in the array.
// function checkunique(arr){
//     var output=[]
//     for(let i=0;i<arr.length;i++){
//         var value = arr[i];
//         if(output.indexOf(arr[i])!==-1){
//           return true;
//         }
//           output.push(value)
//     }

// return false;

// }

// arr=[1,2,3,4,5]
// console.log(checkunique(arr));

//Write a function which checks if all the items of the array are the same data type.
function checkdatatypes(arr){
var type=typeof arr[0]
console.log(type)
for(let i=1;i<arr.length;i++){
   var d=typeof arr[i]
   if(d!=type)
   return false
}
return true;
}

arr=[1,2,3,4,'5']
console.log(checkdatatypes(arr));