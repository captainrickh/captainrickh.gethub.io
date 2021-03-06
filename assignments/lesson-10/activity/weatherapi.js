let weatherRequest = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function() {
    let weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);

    document.getElementById("current-temp").innerHTML = weatherData.main.temp;

    let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather.description;
    document.getElementById("current-img").setAttribute('src', icon);
    document.getElementById("current-img").setAttribute('description', desc);
}