const number=[2,4,6,10]

const a=number.every((number)=>number%2===0);

//callback  function -----> true/false (boolena)
//every method ---> true/false (boolean)
console.log(a)

const userCart=[
    {productid:1,productname:"p1",price:3430},
    {productid:2,productname:"p2",price:300},
    {productid:3,productname:"p3",price:2045},
    {productid:4,productname:"p4",price:1045},
    {productid:5,productname:"p5",price:5004},


]

const ans=userCart.every((cartitem)=>{
   return cartitem.price<30000;
})
console.log(ans)