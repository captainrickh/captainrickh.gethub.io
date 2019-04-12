

//Weather Summary//
//Temple1//
let weatherRequest = new XMLHttpRequest();
let WapiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5391832&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";
weatherRequest.open('GET', WapiURLstring, true);
weatherRequest.send();
weatherRequest.onload =  function() {
let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById("cw").innerHTML = weatherData.weather[0].main;
    document.getElementById("temp").innerHTML = weatherData.main.temp + "&deg;F";
    document.getElementById("hum").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("speed").innerHTML = weatherData.wind.speed + " mph";
    //windchill//
    var t = parseInt(weatherData.main.temp);
    var s = parseInt(weatherData.wind.speed);
    var f = (35.74 + (.6215 * t) - (35.75 * Math.pow(s, .16)) + (.4275 * t * (Math.pow(s, .16))));
    document.getElementById('wc').innerHTML = f.toFixed(0) + "&deg;F";
}

//Temple2//
let weatherRequest1 = new XMLHttpRequest();
let WapiURLstring1 = "https://api.openweathermap.org/data/2.5/weather?id=5850027&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";
weatherRequest1.open('GET', WapiURLstring1, true);
weatherRequest1.send();
weatherRequest1.onload =  function() {
let weatherData = JSON.parse(weatherRequest1.responseText);
    document.getElementById("cw1").innerHTML = weatherData.weather[0].main;
    document.getElementById("temp1").innerHTML = weatherData.main.temp + "&deg;F";
    document.getElementById("hum1").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("speed1").innerHTML = weatherData.wind.speed + " mph";
    //windchill//
    var t = parseInt(weatherData.main.temp);
    var s = parseInt(weatherData.wind.speed);
    var f = (35.74 + (.6215 * t) - (35.75 * Math.pow(s, .16)) + (.4275 * t * (Math.pow(s, .16))));
    document.getElementById('wc1').innerHTML = f.toFixed(0) + "&deg;F";
}

//Temple3//
let weatherRequest2 = new XMLHttpRequest();
let WapiURLstring2 = "https://api.openweathermap.org/data/2.5/weather?id=5391832&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";
weatherRequest2.open('GET', WapiURLstring2, true);
weatherRequest2.send();
weatherRequest2.onload =  function() {
let weatherData = JSON.parse(weatherRequest2.responseText);
    document.getElementById("cw2").innerHTML = weatherData.weather[0].main;
    document.getElementById("temp2").innerHTML = weatherData.main.temp + "&deg;F";
    document.getElementById("hum2").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("speed2").innerHTML = weatherData.wind.speed + " mph";
    //windchill//
    var t = parseInt(weatherData.main.temp);
    var s = parseInt(weatherData.wind.speed);
    var f = (35.74 + (.6215 * t) - (35.75 * Math.pow(s, .16)) + (.4275 * t * (Math.pow(s, .16))));
    document.getElementById('wc2').innerHTML = f.toFixed(0) + "&deg;F";
}

//Temple4//
let weatherRequest3 = new XMLHttpRequest();
let WapiURLstring3 = "https://api.openweathermap.org/data/2.5/weather?id=2673730&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";
weatherRequest3.open('GET', WapiURLstring, true);
weatherRequest3.send();
weatherRequest3.onload =  function() {
let weatherData = JSON.parse(weatherRequest3.responseText); 
    document.getElementById("cw3").innerHTML = weatherData.weather[0].main;
    document.getElementById("temp3").innerHTML = weatherData.main.temp + "&deg;F";
    document.getElementById("hum3").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("speed3").innerHTML = weatherData.wind.speed + " mph";
    //windchill//
    var t = parseInt(weatherData.main.temp);
    var s = parseInt(weatherData.wind.speed);
    var f = (35.74 + (.6215 * t) - (35.75 * Math.pow(s, .16)) + (.4275 * t * (Math.pow(s, .16))));
    document.getElementById('wc3').innerHTML = f.toFixed(0) + "&deg;F";
}