window.onload = function() {

document.getElementById("map").onclick = newWindow;

function newWindow() {
  window.open("https://goo.gl/maps/nEQ81g1CGGS2", "map", "resizable=no, toolbars=no, location=no, height=600, width=1000");
    return false;
}

}