//   REEST
function addNumber(a,b,c,...other){
    // console.log(other);
    console.log(other[0]);
    return a+b+c;
}
const res=addNumber(2,5,6,8,9,10);
console.log(res);

//SPREAD
var names=["Mohd","Ziya","Shameeem"];
function getNames(name1,name2,name3){
    console.log(name1,name2,name3)
}
getNames(names[0],names[1],names[2]);
getNames(...names);