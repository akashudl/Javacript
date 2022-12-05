const user1={
    firstName: 'John',
    age:8,
    // about:function(){
    //     console.log(this.firstName,this.age)
    // }
}
const user2={
    firstName: 'Akash',
    age:24,
    
}
function about(hobby,favmusician){
    console.log(this.firstName,this.age,hobby,favmusician)
}
// about.call(user1,"guitar2","mozart") // if we pass user 2 object to function of user1 and then print will will work for user2
// user1.about.call(user2,"guitar2","mozart");// you can muliptle arguments 
//apply
// about.apply(user1,["guitar","bach"]) // passing hobby and favmyusican as , seperted we can pass the value lik array 
const func=about.bind(user1,"guitar2","mozart")  //bind always return function so we have to stor in some const and then call the function with name as argument
func();