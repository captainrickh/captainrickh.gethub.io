
//Weather Summary//
let weatherRequest = new XMLHttpRequest();
var WapiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";

weatherRequest.open('GET', WapiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function() {
    let weatherData = JSON.parse(weatherRequest.responseText);

    
    document.getElementById("cw").innerHTML = weatherData.weather[0].main;
    document.getElementById("temp").innerHTML = weatherData.main.temp_max + "&deg;F";
    document.getElementById("hum").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("speed").innerHTML = weatherData.wind.speed + " mph";


    //windchill//
    var t = parseInt(weatherData.main.temp);
    var s = parseInt(weatherData.wind.speed);
    var f = (35.74 + (.6215 * t) - (35.75 * Math.pow(s, .16)) + (.4275 * t * (Math.pow(s, .16))));
    document.getElementById('output').innerHTML = f.toFixed(0) + "&deg;F";


    //Curent Temp//
    document.getElementById("ct").innerHTML = weatherData.main.temp + "&deg;F";




    

}


//Five Day Forcast//
let forecastRequest = new XMLHttpRequest();
var FCapiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";

forecastRequest.open('GET', FCapiURLstring, true);
forecastRequest.send();

forecastRequest.onload =  function() {
    let forecastData = JSON.parse(forecastRequest.responseText);

    console.log(forecastData);


    document.getElementById("day1").innerHTML = forecastData.list[0].dt_txt;
    document.getElementById("day2").innerHTML = forecastData.list.main;
    document.getElementById("day3").innerHTML = forecastData.list.main;
    document.getElementById("day4").innerHTML = forecastData.list.main;
    document.getElementById("day5").innerHTML = forecastData.list.main;

    document.getElementById("temp1").innerHTML = forecastData.list[0].main.temp;
    document.getElementById("temp2").innerHTML = forecastData.list.main;
    document.getElementById("temp3").innerHTML = forecastData.list.main;
    document.getElementById("temp4").innerHTML = forecastData.list.main;
    document.getElementById("temp5").innerHTML = forecastData.list.main;



    //Weather Images//
    let icon = "http://openweathermap.org/img/w/" + forecastData.list[0].weather[0].main + ".png";
    let desc = forecastData.list[0].weather[0].main;
    document.getElementById("wimg1").setAttribute('src', icon);
    document.getElementById("wimg1").setAttribute('alt', desc);
    document.getElementById("wimg2").setAttribute('src', icon);
    document.getElementById("wimg2").setAttribute('alt', desc);
    document.getElementById("wimg3").setAttribute('src', icon);
    document.getElementById("wimg3").setAttribute('alt', desc);
    document.getElementById("wimg4").setAttribute('src', icon);
    document.getElementById("wimg4").setAttribute('alt', desc);
    document.getElementById("wimg5").setAttribute('src', icon);
    document.getElementById("wimg5").setAttribute('alt', desc);

}