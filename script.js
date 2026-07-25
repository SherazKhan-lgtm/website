// Floating particles animation

let stars = document.querySelector(".stars");


for(let i=0;i<100;i++){

let star=document.createElement("span");

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=
(Math.random()*5+3)+"s";


stars.appendChild(star);

}
