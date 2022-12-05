// function Outerfunction(){
//     let count=0;

//     function innerfunction(){
//         count++;
//         return count;
//     }
//     return innerfunction

// }



// const innerfunction=Outerfunction();
// console.log(innerfunction())
// console.log(innerfunction())
// console.log(innerfunction())


//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, 
//totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount(firstname,lastname){
    this.firstname=firstname
    this.lastname=lastname
    let incomes
    let expenses
   function totalIncome(){
    return incomes=800000
   }
   function accountInfo(){
    return this.firstname+" "+this.lastname
   }
   return {
    accountInfo:accountInfo(),

   }

}

const innerfunction=personAccount("Akash","Pandit");
console.log(innerfunction.accountInfo)