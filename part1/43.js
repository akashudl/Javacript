//some method 
const number =[3,5,6,7,8];
//kya ek bhi no esa jo even hai then it will return

const a=number.some((number)=>number%2===0)
console.log(a);


const userCart=[
    {productid:1,productname:"p1",price:3430},
    {productid:2,productname:"p2",price:300},
    {productid:3,productname:"p3",price:2045},
    {productid:4,productname:"p4",price:1045000},
    {productid:5,productname:"p5",price:5004},


];
const ans=userCart.some((userCart)=>userCart.price>100000)
console.log(ans);

