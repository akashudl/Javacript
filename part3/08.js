//function returing promises

function ak(){
    const bucket=["Coffee",'chips','Vegetables','salt','rice']
   return  new Promise((resolve,reject)=>{

        if(bucket.includes("Vegetables")&&bucket.includes("salt")&&bucket.includes("rice"))
        {
            resolve({value:"friedrice"})
        }else{
            reject("could not make it ")
        }
});
}
ak().then(   //call the function ()

    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })