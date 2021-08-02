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
    document.getElementById('weather').innerHTML = "Oh no! Something went wrong. Try again?";
  });
}

function showWeather( d ) {
  let current = Math.round(parseFloat(d.main.temp)-273.15);
  let high = Math.round(parseFloat(d.main.temp_max)-273.15);
  let low = Math.round(parseFloat(d.main.temp_min)-273.15);
  let description = d.weather[0].description;

  document.getElementById('weather').innerHTML = 'It is currently ' + current + '&deg; with ' + description + ". High: " + high + "&deg; Low: " + low + "&deg;" ;

  if( description.indexOf('snow') > 0 || description == 'snow') {
  	document.documentElement.className = 'snow';
  }
  else if( description.indexOf('sleet') > 0 || description == 'sleet') {
  	document.documentElement.className = 'snow';
  }
  else if( description.indexOf('clear') > 0 || description == 'clear' ) {
  	document.documentElement.className = 'clear';
  }
  else if( description.indexOf('clouds') > 0 || description == 'clouds' ) {
  	document.documentElement.className = 'clouds';
  }
  else if( description.indexOf('rain') > 0 || description == 'rain') {
  	document.documentElement.className = 'rain';
  }
  else if( description.indexOf('drizzle') > 0 || description == 'drizzle' ) {
  	document.documentElement.className = 'rain';
  }
  else if( description.indexOf('storm') > 0 || description == 'storm' ) {
  	document.documentElement.className = 'storm';
  }
  else if( description.indexOf('fog') > 0 || description == 'fog' ) {
  	document.documentElement.className = 'fog';
  }
  else if( description.indexOf('mist') > 0 || description == 'mist' ) {
  	document.documentElement.className = 'fog';
  }
  else{
    document.documentElement.className = 'clear';
  }
}