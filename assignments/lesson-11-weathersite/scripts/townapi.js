

//Town Data//
var eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var eventRequest = new XMLHttpRequest(); 
eventRequest.open('GET', eventURL); 
eventRequest.responseType = 'json'; 
eventRequest.send();  

eventRequest.onload = function() { 
var townData = eventRequest.response;
var mytown = document.getElementById("town").innerHTML; 
populateData(townData); 
} 

function populateData(jsonObj){ 
var allData = jsonObj["towns"]; 

    for (var i= 0; i < allData.length; i++){
        var name = allData[i].name;
        if(name === mytown) {
            for(x=0; x<allData[i].events.length; x++){
                var event = document.createElement("p");
                event.textContent = allData[i].events[x]; 
                document.getElementById("pEvent").appendChild(event);
            }
        }
    }
}






//Weather Summary//
var mytown = document.getElementById("town").innerHTML;
var param = "";
    if (mytown === "Fish Haven"){
        param = "id=5585010";
    }
    else if (mytown === "Soda Springs"){
        param = "id=5607916";
    }
    else if (mytown === "Preston"){
        param = "id=5604473";
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


    //Curent Temp//
    document.getElementById("ct").innerHTML = weatherData.main.temp + "&deg;F";
}




//Five Day Forcast//
let forecastRequest = new XMLHttpRequest();
var FCapiURLstring = "https://api.openweathermap.org/data/2.5/forecast?" + param + "&units=imperial&APPID=c16313d834282b956b9d04b8982ca7d4";

forecastRequest.open('GET', FCapiURLstring, true);
forecastRequest.send();

forecastRequest.onload =  function() {
    let forecastData = JSON.parse(forecastRequest.responseText);

    console.log(forecastData);

    var dayName=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var targetDiv = document.querySelector('div.days-forecast');
      // get the total elements in the list array
    var nDays = forecastData.list.length;
       // loop trhough the  list array
     
    var counter=1;
   
    for(var i=0; i< nDays;i++){
        
        // create date object from dt_txt
        var dt=forecastData.list[i].dt_txt;
        var iDate = new Date(dt);
        var dtTime = myCurtime(dt); // get current time
        //filter hour 18
        
        if(dtTime==18){ // create row
        
            //if data time is 18:00 hours, display this
                
            var iconcode=forecastData.list[i].weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        
            var tempMain= forecastData.list[i].main.temp;    
            //var iconcode=forecastData.list[i].weather.icon;
            // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        
            // var thtd1 = document.createElement('th');
            document.getElementById('day'+ counter).innerHTML = getDayName(dt);
            document.getElementById('wimg'+counter).src=iconurl;
            document.getElementById('temp'+counter).innerHTML=tempMain;
            
            
            console.log(iconcode); 
            console.log(counter); 
            counter++;
        }
    }
    
    function getDayName(newDt){
        var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dt=newDt;
        var myDate = new Date(dt);
        var  curDate=myDate.getDay();
        var dayName=days[curDate];
        return dayName;
    }
    
    function myCurtime(newDt){
        var iDate=new Date(newDt);
        var curTime=iDate.getHours();
        return curTime;
    }
    
    
}