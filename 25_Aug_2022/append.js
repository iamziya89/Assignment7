let elm=document.getElementById('intro');
let h2=document.createElement('h2');
let text=document.createTextNode('Mohammad Ziya Shameem')
h2.appendChild(text)
 h2.className="try pi"
 h2.id="ziya"
 

elm.appendChild(h2);
console.log(elm);

document.body.appendChild(h2)