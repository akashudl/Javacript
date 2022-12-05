
let random_character="";
for(let i=0;i<6;i++)
{
     random_character+=Math.floor(Math.random () * 10)
}
console.log(random_character);
//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let random_number=[];
for(let i=0;i<6;i++)
{ 
    var r=Math.floor(Math.random () * 100)+1
    if(random_number.indexOf(r)==-1) 
    random_number.push(r)

}
console.log(random_number);

//Develop a small script which generate a six characters random id:

var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let c=characters.length
var result=''
for(let i=0;i<6;i++)
{ 
    result+=characters.charAt(Math.floor(Math.random () * c))

    
}
console.log(result)


//
let hexadecma="0123456789ABCDEF"
let h=hexadecma.length
var result=''
for(let i=0;i<6;i++)
{ 
    result+=hexadecma.charAt(Math.floor(Math.random () * h))

    
}
console.log(result)

//Write a script which generates a random rgb color number.
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
const rgb = `rgb(${red},${green}, ${blue})`;
console.log(rgb)

//Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
  ]
let countries_length=[]
for(let i=0;i<countries.length;i++){
   var d=countries[i]
   countries_length.push(d.length)

}
let countries_code=[]
for(let i=0;i<countries.length;i++){
   var d=countries[i].toUpperCase()
   countries_code.push(d.substring(0,3))

}


let newcountries=[]
for(let i=0;i<countries.length;i++){
    var countrie=countries[i].toUpperCase()
    var countriesc=countries_code[i];
    var countriesl=countries_length[i]
    var newarray=[];
    newarray.push(countrie,countriesc,countriesl)
    newcountries.push(newarray)
 
 }

console.log(newcountries)


//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let landcountries=[]
for(let i=0;i<countries.length;i++){
    var countrie=countries[i]
    if(countrie.includes('land')){
        landcountries.push(countrie)
    }
}
console.log(landcountries)

//n above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countrieendwith=[]
for(let i=0;i<countries.length;i++){
    var countrie=countries[i]
    if(countrie.endsWith('ia')){
        countrieendwith.push(countrie)
    }
}
console.log(countrieendwith)
// /Using the above countries array, find the country containing the biggest number of characters.

let biggestcountry=''
for(let i=0;i<countries.length;i++){
    var countrie=countries[i]
    if(biggestcountry.length<countrie.length){
        biggestcountry=countrie
    }
}
console.log(biggestcountry)