// var div=document.querySelector('div');
//         div.addEventListener("click",()=>{
//             console.log("div");
//         },true)

// var button=document.querySelector('button');
//         button.addEventListener("click",()=>{
//             console.log("button");
//         },true);

var div=document.querySelector('div');
        div.addEventListener("click",()=>{
            console.log("div");
        })

var button=document.querySelector('button');
        button.addEventListener("click",(event)=>{
            // event.stopImmediatePropagation();
            console.log("button");
        });
        button.addEventListener("click",(event)=>{
            event.stopImmediatePropagation();
            console.log("button111");
        });