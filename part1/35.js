//function returing function
// this type of function is called high oredr function
function myfun(){
    function hello(){
        console.log("hello")
    }
    return hello;
}
const ans=myfun(); //function returing function hello and stroing it in ans and again then calling ans ();
ans();

