window.onload = function () {
//Get current date
var now = new Date();

//Display current time and date
document.getElementById("dtField").innerHTML = " " + showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showAmPm(now.getHours()) + ". ";   

//Display current time and date
document.getElementById("sweden").innerHTML = " " + showHoursSweden(now.getHours()) + showZeroFilled(now.getMinutes()) + showAmPm(showTheHours(now.getHours())) + ". "; 

//Display 12-hour time
  function showHoursSweden(theHour) {    
    if (theHour < 19) {
      theHour = theHour + 6;
    } 
    if (theHour >= 19) {
      theHour = (theHour + 6) - 24;
    }
    
    if (theHour > 0 && theHour < 13) { 
      return theHour; 
    } 
    if (theHour == 0) { 
      return 12; 
    } 
    return theHour-12; 
  } 

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
  function showAmPm(theHour) { 
    if (theHour < 12) { 
      return " am";
    } 
    return " pm";  
  }
}

$(document).ready(function($) {
  $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=imperial&callback=?&APPID=f0e5060484883a6e275c8dfb6f6030c1', function(data) {
  curWeather(data.list[0]);
  });//getJson

//function to create weather information
function curWeather(weatherData) {
  $('#weather').html(
    '<h4>'+ weatherData.main.temp + '&#8457</h4>' 
    );
  }//curWeather

});//ready