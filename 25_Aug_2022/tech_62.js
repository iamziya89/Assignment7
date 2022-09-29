let elm=document.getElementById("myInp");
elm.addEventListener('focus',myFocusFun);
elm.addEventListener("blur",myFun);
// elm.addEventListener("change",function (){
//     console.log(this.value);
// });

elm.addEventListener("input",function (){
    console.log(this.value);
});

function myFocusFun(){
    elm.style.background="yellow";
}

function myFun(){
    elm.style.background="white";
}


