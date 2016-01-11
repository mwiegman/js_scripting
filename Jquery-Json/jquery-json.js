// Meredith Wiegman
//November 24, 2015

$(document).ready(function($) {
//variable to hold city name
var city

//function to display current weather when navigation items are clicked
$('a').click(function(){
  $('dd').removeClass('active');
  $(this).parent().addClass('active');
  city = $(this).attr("href");
  city = city.substring(1); 
  $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + city +',%20FL&units=imperial&callback=?&APPID=f0e5060484883a6e275c8dfb6f6030c1', function(data) {
  curWeather(data.list[0]);
  });//getJson
  
});//nav click

//function to display current weather for location entered in text box
$('#search').click(function(){  
  city = $('#city').val();  
  if (city != '') {
  $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + city +',%20FL&units=imperial&callback=?&APPID=f0e5060484883a6e275c8dfb6f6030c1', function(data) {
    curWeather(data.list[0]);
    });//getJson
  } else {
    $('#weather').html(
      '<h3 style="color:red;">Please enter a city name</h3>'
      );
  }
});//button click

//Trigger search button click event on enter
$('#city').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#search').click();
        }
});//enter key

//function to create weather information
function curWeather(weatherData) {
  $('#weather').html(
    '<h2>Location: ' + city + '</h2>' + 
    "<div class='icon'><i class='wi wi-owm-"+weatherData.weather[0].id+"'></i></div>" +
    '<h2>Description: ' + weatherData.weather[0].description + '.</h2>' +
    '<h3>Temperature: ' + weatherData.main.temp + '</h3>' +
    '<h3>Low Temperature: ' + weatherData.main.temp_min + '</h3>' +
    '<h3>High Temperature: ' + weatherData.main.temp_max + '</h3>'    
    );
  }//curWeather

});//ready

