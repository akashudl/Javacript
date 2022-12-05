const number=[5,9,1200,400,3000]
const a= number.sort((a,b) =>{
    return a-b;
})
console.log(a);


const ak=["harshith","abcd","mohit","hitesh"]
ak.sort()
console.log(ak);


const product=[
    {product:1,ProductName:"mobile",price:5000},
    {product:2,ProductName:"laptop",price:3000},
    {product:3,ProductName:"tv",price:4000}
]

const lowtohigh = product.slice(0).sort((a,b)=>{
    return a.price-b.price;
})
console.log(lowtohigh)
const hightolow = product.slice(0).sort((a,b)=>{
    return b.price-a.price;
})
console.log(hightolow)

