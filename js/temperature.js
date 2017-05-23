var apiKey = require('./../.env').apiKey;

function Temperature(){
}

Temperature.prototype.getTemps = function(city, displayTemp) {
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(function(response) {
    var degreesF = Math.round(response.main.temp*(9/5) - (460));
    var degreesC = Math.round(response.main.temp-273);
    displayTemp(degreesF, degreesC);
  })
  .fail(function(error) {
    $('.showWeather').text("Failure");
  });
};



exports.tempModule = Temperature;
