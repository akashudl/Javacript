const a=[1,2,3,4,5,6]
const sum =a.reduce((acc,b) =>{
    
    return acc+b;
},0)
console.log(sum);


const userCount=[
    {product:1,ProductName:"mobile",price:2000},
    {product:2,ProductName:"laptop",price:3000},
    {product:3,ProductName:"tv",price:4000}
]

const total=userCount.reduce((totalprice,b) =>{
        return totalprice+b.price;
},0)
console.log(total);