const Obj={
    fname:'Mohammad',
    mname:'Ziya',
    lname:'Shameeem',
    age:32,
    // myFun:function (){
    //     return "Hello Objec how are you"
    // }
}
// Obj.myFun=function (){
//     console.log("Mokarrabin Ansari");
// }
// Obj.myFun();
function myFun(){
    console.log("Normal Function");
}
Obj.myFun1=myFun;
Obj.myFun1();
