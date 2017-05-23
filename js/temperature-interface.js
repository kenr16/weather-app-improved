var Temperature = require('./../js/temperature.js').tempModule;

var displayTemp = function(degreesF, degreesC) {
  $('.showWeather').append(`<br>Which is ${degreesF} \u00B0 F`);
  $('.showWeather').append(`<br>Which is ${degreesC} \u00B0 C`);
}

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#temperature-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentTemperatureObject.getTemps(city, displayTemp);
  });
});
