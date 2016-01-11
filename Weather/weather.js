// Meredith Wiegman
//Nov. 9, 2015

window.onload = initAll;
//variables to hold current weather conditions
var currWeatherDiv = "";
var foreWeatherDiv = "";

//variable to hold forecast list items
var toAdd = document.createDocumentFragment();

function initAll() {
  //display current date, temperature, and description 
  document.getElementById("currWeather").innerHTML = currWeatherDiv;
  //display current min and max temperature information
  document.getElementById("foreWeather").innerHTML = foreWeatherDiv;
  //append "toAdd" variable containing forecast list items to "forecast" ul
  document.getElementById("forecast").appendChild(toAdd);
}

//function to convert api unix time to current date
function showDate(seconds) {
  var utcSeconds = seconds;
  var d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var date = dayName[d.getDay()]+", "+monName[d.getMonth()]+" "+d.getDate();
  return date;
}

//function to display current date, current temperature, and desciption of current weather
function currWeather(data) {
  var id = data.weather[0].id;  
  var utcSeconds = data.dt;
  currWeatherDiv += "<h2>Current Weather for</h2>"+"<h2>"+
  showDate(utcSeconds)+"</h2>";
  currWeatherDiv += "<h2>Orlando, FL</h2>";
  currWeatherDiv += "<div class='icon'><i class='wi wi-owm-"+id+"'></i></div>";  
  currWeatherDiv += "<h3>"+data.weather[0].description+"</h3>"; 
  currWeatherDiv += "<p>Current temperature: "+Math.round(data.main.temp)+"&deg;</p>"; 
}

//function to display current low temp and high temp
function foreWeather(data) {  
  foreWeatherDiv += "<p>Low temperature: "+Math.round(data.list[0].temp.min)+"&deg;</p>";
  foreWeatherDiv += "<p>High temperature: "+Math.round(data.list[0].temp.max)+"&deg;</p>";   

//for loop to add li to "toAdd" variable for each day in forecast list
for(var i=1; i < data.list.length; i++){
   var newDiv = document.createElement('li');
   var utcSeconds = data.list[i].dt;
   var id = data.list[i].weather[0].id;
   newDiv.id = 'day'+i;  
   newDiv.innerHTML = "<h2>"+
   showDate(utcSeconds)+"</h2>"+
   "<div class='icon'><i class='wi wi-owm-"+id+"'></i></div>" 
   + "<h3>"+data.list[i].weather[0].description+"</h3>"
   + "<p>Daytime temperature: "+Math.round(data.list[i].temp.day)+"&deg;</p>"
   + "<p>Low temperature: "+Math.round(data.list[i].temp.min)+"&deg;</p>" + "<p>High temperature: "+Math.round(data.list[i].temp.max)+"&deg;</p>";
   toAdd.appendChild(newDiv); 
  }  
}

