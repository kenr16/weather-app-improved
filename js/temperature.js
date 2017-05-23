var apiKey = require('./../.env').apiKey;

function Temperature(){
}

Temperature.prototype.getTemps = function(city, displayTemp) {
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(function(response) {
    degreesF = response.main.temp*(9/5) - (460);
    degreesC = response.main.temp-273;
    displayTemp(degreesF, degreesC);
  })
  .fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};



exports.tempModule = Temperature;
