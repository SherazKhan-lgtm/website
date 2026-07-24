
/* Welcome Loader */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},3000);

});


/* Typing Animation */

const text = [
"Sheraz Downloader",
"TikTok Video Downloader",
"Fast & Secure Tools",
"Official Website"
];

let i=0;
let j=0;
let current="";
let deleting=false;

function typing(){

current=text[i];

if(!deleting){

document.getElementById("typing").innerHTML=
current.substring(0,j++);

if(j>current.length){

deleting=true;

setTimeout(typing,1000);

return;

}

}

else{

document.getElementById("typing").innerHTML=
current.substring(0,j--);

if(j<0){

deleting=false;

i++;

if(i>=text.length){

i=0;

}

}

}

setTimeout(typing,100);

}

typing();



/* Visitor Counter */

let count=0;

let target=12543;

let counter=document.getElementById("visitorCount");


let interval=setInterval(()=>{

count+=Math.ceil(target/100);

if(count>=target){

count=target;

clearInterval(interval);

}

if(counter){

counter.innerHTML=count.toLocaleString();

}

},30);



/* Smooth Scroll */

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(){

});

});
