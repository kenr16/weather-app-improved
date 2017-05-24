var Weather = require('./../js/weather-app.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').append(`The humidity in ${city} is ${humidityData} % <br>` );
};

var displayTempK = function(city, temperatureData) {
  $('.showWeather').append(`The temperature in ${city} is ${temperatureData} K`);
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity, displayTempK);
  });


  // function Dino(){
  // }
  // Dino.prototype.getDino = function(json, paragraphs, words) {
    console.log("The get request has been sent");
    $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=10`)
    .then(function(response) {
      console.log(response);
      console.log(JSON.stringify(response));
      alert(response[0])
      alert(response[0][0])
      let obj1 = JSON.stringify(response).replace("[[", "").replace("]]", "");
      let large_array = obj1.split("],[");
      let first_array = large_array[0].split(",");
      let second_array = large_array[1].split(",");
      $('#divone').text(first_array[0]);

    });




    // .then(function(response) {
    //   $('.divone').text(response);
    // })
    // .fail(function(error) {
    //   $('.divone').text(error.responseJSON.message);
    // });

  // };

});
