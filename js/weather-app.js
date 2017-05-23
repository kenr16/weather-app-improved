var apiKey = require('./../.env').apiKey;

function Weather(){

}

Weather.prototype.getWeather = function(city, displayHumidity, displayTemp) {
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(function(response) {
    displayHumidity(city, response.main.humidity);
    displayTemp(city, response.main.temp);
  })
  .fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });

}

exports.weatherModule = Weather;
