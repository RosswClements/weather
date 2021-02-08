document.getElementById('search').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    fetchWeather(document.getElementById('search').value)
  }
});

function fetchWeather( city ) {
  const key = config.api_key;
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)  
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    showWeather(data);
  })
  .catch(function() {
    console.log("Oh no! Something went wrong.")
  });
}

function showWeather( d ) {
  let current = Math.round(parseFloat(d.main.temp)-273.15);
  let high = Math.round(parseFloat(d.main.temp_max)-273.15);
  let low = Math.round(parseFloat(d.main.temp_min)-273.15);

  document.getElementById('weather').innerHTML = 'It is currently ' + current + '&deg; and ' + d.weather[0].description + ". High: " + high + "&deg; Low: " + low + "&deg;" ;

}