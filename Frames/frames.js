//Meredith Wiegman
//September 21, 2015

window.onload = function() {

document.getElementById("dynamic").onclick = writeContent;

function writeContent() {
  document.getElementById("icontent").contentWindow.document.body.innerHTML = "<h1>Heading Dynamically Created<\/h1>";
    return false;
}

document.getElementById("seminole").onclick = newWindow;

function newWindow() {
  window.open("http://www.seminolestate.edu", "seminole", "resizable=no, toolbars=no, location=no, height=500, width=500");
    return false;
}

document.getElementById("dynamicWin").onclick = dynamicWindow;

function dynamicWindow() {

  var win = window.open("", "window", "height=500, width=500");
  win.document.body.innerHTML = "<h1>Heading Dynamically Created<\/h1>";
  return false;
  
}

}