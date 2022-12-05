// Exercises: Level 1
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
// const pattern = /\d+/g 
// const s="He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
// const matches=s.match(pattern);
// console.log(matches)
// let sum=0;
// for(let i=0;i<matches.length;i++){
// sum+=+matches[i]
// }
// console.log(sum)

//
// function isvalidfirstname(firstname){
//     const pattern=/\b[a-zA-Z]+/g
//     const matches=pattern.test(firstname);
//     return matches;
// }

// console.log(isvalidfirstname('first_name'))
// console.log(isvalidfirstname('first-name'))
// console.log(isvalidfirstname('1first_name'))
// console.log(isvalidfirstname('firstname'))
// // is_valid_variable('1first_name') 
// // is_valid_variable('firstname')

// //Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

//  paragraph = `I love teaching. If you do not love teaching what else can you love.
// I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
// console.log(tenMostFrequentWords(paragraph))
// function tenMostFrequentWords(paragraph){
//     let words = paragraph.match(/\w+/g);
//     console.log(words);
// }

// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
//   let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// //   console.log(cleanText(sentence))

//   matches = sentence.replace(/[^\w\s]/g, '')
// console.log(matches)  
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.clear() 