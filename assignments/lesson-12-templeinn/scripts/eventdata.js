
var requestURL1 = 'https://byui-cit230.github.io/weather/data/towndata.json'; 
var request1 = new XMLHttpRequest(); 
request1.open('GET', requestURL1); 
request1.responseType = 'json'; 
request1.send();  

request1.onload = function() { 
var prestonData = request1.response; 
populatePrestonData(prestonData); 
} 

function populatePrestonData(jsonObj){ 
var allData = jsonObj["towns"]; 

    for (var i= 0; i < allData.length; i++){
        var name = allData[i].name;
        if(name === "Preston") {
            var events0 = document.createElement('p');
            var events1 = document.createElement('p');
            var events2 = document.createElement('p');
            
            events0.textContent = allData[i].events[0];
            events1.textContent = allData[i].events[1];
            events2.textContent = allData[i].events[2];
            document.getElementById("pEvent").appendChild(events0); document.getElementById("pEvent").appendChild(events1); document.getElementById("pEvent").appendChild(events2);
       }
    }
} 