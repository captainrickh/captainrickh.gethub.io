
//Weather Summary//
var mytown = document.getElementById("town").innerHTML;
var param = "";
    if (mytown === "San Diego Temple"){
        param = "id=5391832";
    }
    else if (mytown === "Laie Hawaii Temple"){
        param = "id=5850027";
    }
    else if (mytown === "Nauvoo Illinois Temple"){ 
        param = "id=4903330";
    }
    else if (mytown === "Stockholm Sweden Temple"){ 
        param = "id=2673730";
    }

let weatherRequest = new XMLHttpRequest();
var WapiURLstring = "https://api.openweathermap.org/data/2.5/weather?" + param + "&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";

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
    document.getElementById('wc').innerHTML = f.toFixed(0) + "&deg;F";
} 