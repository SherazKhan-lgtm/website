document.addEventListener("DOMContentLoaded", function () {

document.body.style.opacity="0";

setTimeout(function(){
document.body.style.transition="1s";
document.body.style.opacity="1";
},100);

const buttons=document.querySelectorAll(".btn");

buttons.forEach(function(btn){

btn.addEventListener("mouseenter",function(){

this.style.transform="scale(1.05)";
this.style.boxShadow="0 0 25px #00e5ff";

});

btn.addEventListener("mouseleave",function(){

this.style.transform="scale(1)";
this.style.boxShadow="0 0 15px rgba(0,229,255,.5)";

});

});

const profile=document.querySelector(".profile");

let glow=true;

setInterval(function(){

if(profile){

if(glow){

profile.style.boxShadow="0 0 40px #00e5ff";

}else{

profile.style.boxShadow="0 0 15px #00e5ff";

}

glow=!glow;

}

},1000);
  const title=document.querySelector("h1");

const colors=[
"#00e5ff",
"#00ff99",
"#ffeb3b",
"#ff4081",
"#ffffff"
];

let i=0;

setInterval(function(){

if(title){

title.style.color=colors[i];

i++;

if(i>=colors.length){

i=0;

}

}

},1500);

console.log("Sheraz Downloader Loaded Successfully");

});
  
