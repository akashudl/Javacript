//nested destructing
    const users = [
        {userId: 1,firstName: 'harshit', gender: 'male'},
        {userId: 2,firstName: 'mohit', gender: 'male'},
        {userId: 3,firstName: 'nitish', gender: 'male'},
    ]
//    const [user1,user2,user3]=users;
//    console.log(user1);

   //if do not want full object
   const [{firstName},{gender}]=users;
   console.log(firstName);
   console.log(gender);