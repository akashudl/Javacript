//callback function


function myfun2(a){

    console.log('inside function 2')
    console.log(`your name is ${a}`)
}
function myfunc(callback){
    callback("akash")
}


myfunc(myfun2)