//Meredith Wiegman
// October 25, 2015

window.onload = function () {
//Get current date
var now = new Date();

//Create array for day and month names
var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

//Display current time and date
document.getElementById("dtField").innerHTML = " " + showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showAmPm() + ", " + dayName[now.getDay()] + ", " + monName[now.getMonth()] + " " + now.getDate() + ".";   

//Display 12-hour time
  function showTheHours(theHour) { 
    if (theHour > 0 && theHour < 13) { 
      return theHour; 
    } 
    if (theHour == 0) { 
      return 12; 
    } 
    return theHour-12; 
  } 

//Display leading 0
  function showZeroFilled(inValue) { 
    if (inValue > 9) { 
      return ":" + inValue; 
    } 
    return ":0" + inValue; 
  } 

//Display am or pm
  function showAmPm() { 
    if (now.getHours() < 12) { 
      return " am";
    } 
    return " pm";  
  }

// Set the unit values in milliseconds.
var msecPerMinute = 1000 * 60;
var msecPerHour = msecPerMinute * 60;

// Set close time and get the milliseconds
var closeTime = new Date();
closeTime.setHours(21,0);
var closeMsec = closeTime.getTime();

// Set open time and get the milliseconds
var openTime = new Date();
if (now.getHours() >=0 && now.getHours() < 8) {
  openTime.setHours(8,0);
} 
if (now.getHours() >= 8) {
  openTime.setDate(openTime.getDate()+1);
  openTime.setHours(8,0); 
}
var openMsec = openTime.getTime(); 

//Variables to  hold interval, hours, minutes, and milliseconds
var inteval, hours, minutes, mSec; 

function getTime() {
  // Get the difference in milliseconds.
  interval = mSec - now.getTime();

  // Calculate the hours and minutes.
  hours = Math.floor(interval / msecPerHour );
  interval = interval - (hours * msecPerHour );
  minutes = Math.floor(interval / msecPerMinute );
}

if (now.getHours() >= 8 || now.getHours() < 21) {  
  //Calculate interval
  mSec = closeMsec;
  getTime();
  // Display the result.
  document.getElementById("openClose").innerHTML = "closing in " + hours + " hours and " + minutes + " minutes."
}

if (now.getHours() < 8 || now.getHours() >= 21) {
  //Calculate interval
  mSec = openMsec;
  getTime();
  // Display the result.
  document.getElementById("openClose").innerHTML = "opening in " + hours + " hours and " + minutes + " minutes."
}

}