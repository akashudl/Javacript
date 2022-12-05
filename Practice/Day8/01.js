const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  // Object.keys: To get the keys or properties of an object as an array

//   const entries = Object.entries(users)
// console.log(entries)
  // function greatskills(users){
  //   let mostskillperson;
  //   let l=0;
  //   console.log(Object.keys(users))
  //   for (var key of Object.keys(users)){
  //     // console.log(key)
  //     let length=users[key].skills.length
  //     // console.log(users[key].skills)
  //       //  l=Math.max(l,length)
  //       if(l<length){
  //         mostskillperson=key;
  //         l=length
  //       }
  //   }
  //   console.log(mostskillperson)
  //   console.log(l);
  // }
   
//   function countloggedinuser(users){
//      let count=0
//     for (var key of Object.keys(users)){
//      let isLoggedInuser=users[key].isLoggedIn;
//      if (isLoggedInuser===true)
//      count++;
//     }
//     console.log(count)
//   }
//  greatskills(users);
//   countloggedinuser(users)
//   //Find the person who has many skills in the users object.
//   // const address = Object.keys(users)
//   // console.log(address)
//   //   users.getInfoskills=function(){
  
// //   }
// /Find people who are MERN stack developer from the users object
function meradeveloper(){
  let mernpeople=[]
  for (var key of Object.keys(users)){
    let l=users[key].skills
    if (l.includes("MongoDB", "Express", "React", "Node")){
          mernpeople.push(key)
    }
    
  }
  console.log(mernpeople)

}

meradeveloper();
// //Set your name in the users object without modifying the original users object

// const copy_user = Object.assign({}, users)
// // console.log(copy_user)
// copy_user.Akash={
//     email: 'akashudl50@gmail.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
  
// }
// console.log(copy_user)
//Get all keys or properties of users object


// for(let key of Object.keys(users)){
//   console.log(key)
//   console.log(users[key])
// }

///Exercises: Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses
//  properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance 
//  methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]



// function checkloggedin(username){
//    let flag=0
//   for (var key of Object.keys(users)){
//     if(users[key].username===username)
//     {
//       console.log("Username already exist")
//       flag=1;
//       break;
//     }
   
//   }
//   if (flag==0){
//     console.log("User Does not exist ")
//   }
  
// }

// checkloggedin("Brook")


function rateproduct(){

  let flag=0
  for (var key of Object.keys(products)){
    const rate=products[key].ratings
    let avgrate=0
    let count=0;
    for(var keys of Object.keys(rate)){
      //  console.log()
      count++;
      avgrate+=rate[keys].rate
    }
    if(avgrate==0)
    {
      console.log(avgrate)
    }
    else{
      console.log(avgrate/count)
    }
   
  }
}

rateproduct()