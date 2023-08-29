function getData(){
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=13.73202006720473&lon=100.4670411787257&appid=093d0d2110801e734e3a6ff0b2f346af", {
    method: "GET"
  }).then((response) => response.json()).then((data) => {
  console.log(data);
  locate.innerHTML = data.name + ", " + data.sys.country;
  temp.innerHTML = Math.round((data.main.temp-32)/9*100)/100 + "°C";
  weather_status.innerHTML = data.weather[0].main;
  windspeed.innerHTML = data.wind.speed + " km/hr";
  humidity.innerHTML = Math.round((data.main.humidity)*100)/100 + "%";
})
}

getData();
