// let div=document.getElementById('mydiv');
// let btn=document.getElementById('btn');
// div.addEventListener('click',divclicked);
// btn.addEventListener('click',btnclicked);
// document.body.addEventListener('click',bodyClicked)

// function divclicked (){
//     console.log("div clicked.......")
// };
// function btnclicked (){
//     console.log("button clicked.......")
// };
// function bodyClicked (){
//     console.log("body clicked........");
// };


//    Capturing Event

// let div=document.getElementById('mydiv');
// let btn=document.getElementById('btn');

// btn.addEventListener('click',btnclicked,true);
// div.addEventListener('click',divclicked,true);
// document.body.addEventListener('click',bodyClicked,true)

// function divclicked (){
//     console.log("div clicked.......")
// };
// function btnclicked (){
//     console.log("button clicked.......")
// };
// function bodyClicked (){
//     console.log("body clicked........");
// };


//    StopPropagation

let div=document.getElementById('mydiv');
let btn=document.getElementById('btn');

btn.addEventListener('click',btnclicked);
div.addEventListener('click',divclicked);
document.body.addEventListener('click',bodyClicked)

function divclicked (){
    console.log("div clicked.......");
};
function btnclicked (e){
    console.log("button clicked.......")
    e.stopPropagation();
};
function bodyClicked (e){
    console.log("body clicked........");
    e.stopPropagation();
};




















































