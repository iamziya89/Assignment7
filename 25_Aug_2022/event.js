// function btnClick(){
//     alert("Button was Clicked");
//     alert('Mohammad ziya')
// }



// function btnClick(){
//     alert("Button Mohd was Clicked");
// }
// let btn=document.getElementById('btn');
// btn.addEventListener("click",btnClick);
// Anonymous function

// let btn=document.getElementById('btn');
// btn.addEventListener("click",function (){
//     alert('buttons clicked');s
// });

//  multiple event
// let btn=document.getElementById('btn');
// btn.addEventListener("click",function (){
//     console.log('buttons clicked');
// });
// btn.addEventListener("mouseover",function(){
//     console.log("Mouseover clicked");
// });
// btn.addEventListener("mouseout",function(){
//     console.log("Mouseout clicked");
// });



//   Lecture_57

// let btn=document.getElementById('btn');
// function click1(){
//     console.log("clicked_1 activated")
// }
// function click2(){
//     console.log("clicked_2 activated")
// }
// btn.addEventListener("click",click1);
// btn.addEventListener("click",click2);

// btn.removeEventListener("click",click2);


//    Page Load Event
let btn=document.getElementById('btn');
window.addEventListener("load",'DOMContentLoaded',function(){
    console.log("DOM tree created");
});

window.addEventListener("load",'DOMContentLoaded',function(){
    console.log("Fully Loaded");
});












