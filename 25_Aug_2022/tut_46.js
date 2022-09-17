// let elm=document.querySelector('li#list');
// // let psib=elm.previousElementSibling;
// // console.log(psib);

// let nsib=elm.nextElementSibling;
// console.log(nsib);

// let elm=document.getElementById('intro');
// elm.innerText="mohd Ziya"


let elm=document.getElementById('intro');
let ch=elm.firstElementChild.nextElementSibling.nextElementSibling;
ch.innerHTML="Mohd Ziya"
console.log(ch);


