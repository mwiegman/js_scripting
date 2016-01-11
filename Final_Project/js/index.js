function setCookie(cname,cvalue,exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          var expires = "expires=" + d.toGMTString();
          document.cookie = cname+"="+cvalue+"; "+expires;
      }

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        document.getElementById("welcome").innerHTML = "Welcome, " + user + ',';              
    } else {
       user = prompt("Welcome and thank you for visiting! What is your name, so we may personalize future visits?","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

window.onload = function() {

var currImg = 0;
//Caption text array
var captionText = [
  "Old town Stockholm",
  "Stockholm at night",
  "A busy street in Stockholm",
  "Stockholm waterway",
  "Stockholm waterway at night"  
];

  //Set initial image caption and title
  document.getElementById("imgText").innerHTML = captionText[0];
  
  //Previous and next navigation buttons
  document.getElementById("prevLink").onclick = function() {
    newSlide(-1);
  }
  document.getElementById("nextLink").onclick = function() {
    newSlide(1);
  }

//function to change image
function newSlide(direction) {
  var imgCt = captionText.length;
  //loop images
  currImg = currImg + direction;
  if (currImg < 0) {
    currImg = imgCt-1;
  }
  if (currImg == imgCt) {
    currImg = 0;
  }
  //display next image
  document.getElementById("slideshow").src = "Images/image" + currImg + ".jpg";
  //display image caption
  document.getElementById("imgText").innerHTML = captionText[currImg];  
}


}