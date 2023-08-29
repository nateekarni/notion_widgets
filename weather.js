document.body.addEventListener('load',getWeather());

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getWeather, locationError);
} else {
  showError("Your browser does not support Geolocation!");
}

function getWeather(position){
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var acc = position.coords.accuracy;
  const API_KEY = '093d0d2110801e734e3a6ff0b2f346af'

  console.log(position.coords);
  console.log("Accuracy: "+acc+"\nLatitude: "+lat+"\nLongitude: "+lon);

  let weather_show = document.getElementById("weather_status");
  let temp_show = document.getElementById("temp");
  let local = document.getElementById("locate");

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(response => response.json()).then((response) => {
    console.log(data)
    weather_show.innerHTML = `${response.main}`;
    temp_show.innerHTML = `${response.main.temp}`;
    local.innerHTML = `${response.sys.name}`;
  });
}

function keepPosition(){
  latitude_pos = position.coords.latitude;
  longitude_pos = position.coords.longitude;
}
