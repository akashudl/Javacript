const fetch = require('node-fetch');

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


const fetchdata =async ()=>{
    
let languages = [];
    try{
       const response=await fetch(countriesAPI);
       const countries= await response.json()
       console.log(countries)
    //    for (var key of Object.keys(countries)){
    //            console.log(countries[key].languages)
    //         }
    //  
    // const largest=[]
       
    //     for (var key of Object.keys(countries)){
    //         const obj ={
    //             "country":countries[key].name,
    //             "language":countries[key].languages
    //         }
    //        largest.push(obj)
    //     }
    //     console.log(largest)
    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languages.indexOf(language.name) === -1) {
                languages.push(language.name)
            }
        })
    })
    console.log(`the total number of languages in the world is ${languages.length}`)
    }
    catch(err){
    console.log(err)
    }
}


fetchdata()


// const fetchdata =async ()=>{
//     try{
//        const response=await fetch(catsAPI);
//        const cat= await response.json()
//        for (var key of Object.keys(cat)){
//         console.log(cat[key].name)

//        }
//     }
//     catch(err){
//     console.log(err)
//     }
// }


// fetchdata()

// Read the countries api and count total number of languages in the world used as officials.




// Read the countries api and find out the 10 largest countries
// const fetchdata =async ()=>{
//     try{
//        const response=await fetch(countriesAPI);
//        const countries= await response.json()
//        const largest=[]
       
//     for (var key of Object.keys(countries)){
//         const obj ={
//             "country":countries[key].name,
//             "area":countries[key].area
//         }
//        largest.push(obj)
//     }

//     // largest.sort(function(a, b){return b - a});
//     // console.log(largest)
// //    console.log(largest)
//    largest.sort(function(a, b){return b.area - a.area});
//     // console.log(largest)
//    const tenlargts=largest.slice(1,10)
//    console.log(tenlargts)
//    for (var key of Object.keys(tenlargts)){
//     console.log(tenlargts[key].country)
// }
// }

//     catch(err){
//     console.log(err)
//     }
// }

// fetchdata()


// fetchdata()