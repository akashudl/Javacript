//object destructing 
const band ={
    bandName:"led Zepplin",
    famous:"stairway to heaven",
    year:1968,
    anotherFamousSong:"kashmir"

};
let {bandName:var1,famous:var2,...restprops} = band
console.log(bandName);
console.log(restprops);
