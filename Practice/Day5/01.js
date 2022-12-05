//Array Co nstructor()
const arr=Array(8) // creates an an empty array  with 8 items
console.log(arr)
const arr1=Array(9).fill(0) // creates an array
console.log(arr1)
const firtslist=[1,2,3]
const second =[4,6,5]
const thirdlist=firtslist.concat(second) // to conat the array
console.log(thirdlist)
//another way is
const four=[...firtslist,...second] //using spread operator 
console.log(four)
console.log(firtslist.indexOf(2)) // indexof(val) ---> to print the  index of the element present in the array if element then it will print the index  of the element and if element then it will print -1
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers.lastIndexOf(1)) // it will print the index of the last element in array suppose one came two times in this array but the last one is at 6th position so it will return  6th  
console.log(numbers.includes(1)) // includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log(Array.isArray(numbers)) //Array.isArray:To check if the data type is an array if yes return true else return false
console.log(numbers.toString())
//join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const numbers1=[1,2,3,4,5,6,7]
console.log(numbers1.join(" # "))
//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

console.log(numbers1.slice(1,4))  // it copies items from index  1 to 4-1=3
console.log(numbers1)

console.log(numbers1.splice(0,1)) // it remove element from index 0 to 1-1=0 oit changes the original array 

console.log(numbers1)
numbers1.push(4) // to add the eleemnt to last of the array 
numbers1.pop() // to remove the element from the array 
console.log(numbers1)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort((a,b)=>{return a-b}))
const a=(ages.length-1)/2
console.log(ages[parseInt(a)])
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    'India'
  ]
  console.log("Countrye array length",countries.length)
  const b=parseInt((countries.length-1)/2)
  console.log(countries[parseInt(b)])
  console.log((b))
  const g=b;
  if(g%2==0){
      const d=countries.slice(0,b)
      const e=countries.slice(b,countries.length-1)
      console.log(d)
      console.log(e)
  }else{
    const d=countries.slice(0,b+1)
    const e=countries.slice(b+1,countries.length-1)
    console.log(d)
    console.log(e)
  }