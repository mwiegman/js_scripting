//Meredith Wiegman
//Dec. 1, 2015

window.onload = function() {
var circle = document.getElementById("circle");
var button = document.getElementById("button");

button.addEventListener('touchstart', function() {
  circle.style.visibility = 'visible';
}, false);

circle.addEventListener("touchmove",moved,false);

function moved(evt) {
  evt.preventDefault();   
  circle.style.left = (evt.changedTouches[0].pageX - 100) + "px";
  circle.style.top = (evt.changedTouches[0].pageY - 100) + "px";  
  }
};