//reduce
const num=[1,2,3,4,5,6];


// aim: sum of all the no in array

const sum=num.reduce((accumaltor,currentvalue) => {
               return accumaltor+currentvalue;
})

console.log(sum)
//accumaltor always will be first argumnet 
//accumaltor ,currentValue return(accumaltor+currentvalue) 
// 1               2          3
// 3                3          6
// 6                4          10
// 10                5          15
// 15                6          21





const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)  
//with call backfunction we can pass the value of accumator as const=ak=>({},0)
console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000