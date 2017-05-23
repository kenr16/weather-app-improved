var Weather = require('./../js/weather-app.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').append(`The humidity in ${city} is ${humidityData} % <br>` );
};

var displayTempK = function(city, temperatureData) {
  $('.showWeather').append(`The temperature in ${city} is ${temperatureData} \u00B0 K`);
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity, displayTempK);
  });
});
