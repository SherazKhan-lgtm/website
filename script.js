/* ==========================
   SHERAZ KHAN WEBSITE SCRIPT
========================== */


/* Welcome Animation */

window.addEventListener("load", function(){

let welcome = document.getElementById("welcome");

if(welcome){

setTimeout(function(){

welcome.style.opacity = "0";

setTimeout(function(){

welcome.style.display = "none";

},1000);

},3000);

}

});



/* Visitor Counter */

let count = localStorage.getItem("websiteVisitors");

if(!count){

count = 1;

}else{

count++;

}

localStorage.setItem("websiteVisitors", count);


let visitorElement = document.getElementById("visitorCount");

if(visitorElement){

visitorElement.innerHTML = count;

}



/* Online Users Random Effect */

let onlineElement = document.getElementById("onlineCount");

if(onlineElement){

setInterval(function(){

let users = Math.floor(Math.random()*10)+1;

onlineElement.innerHTML = users;

},5000);

}



/* Smooth Button Animation */

const buttons = document.querySelectorAll(".btn, .download-btn, .tool-btn");


buttons.forEach(function(button){

button.addEventListener("mouseenter",function(){

button.style.transform="scale(1.08)";

});


button.addEventListener("mouseleave",function(){

button.style.transform="scale(1)";

});


});



/* Image Loading Effect */

const images = document.querySelectorAll("img");


images.forEach(function(img){

img.addEventListener("load",function(){

img.style.opacity="1";

});

});



/* Current Year Footer */

let year = document.querySelector("footer");

if(year){

year.innerHTML += "<br>© "+new Date().getFullYear()+" Sheraz Khan";

}
