
var townrequest = new XMLHttpRequest();
townrequest.open('GET', "https://byui-cit230.github.io/weather/data/towndata.json");
townrequest.responseType = 'json';
townrequest.send();
townrequest.onload = function () {
    var townStats = townrequest.response;
        document.getElementById('nameP').innerHTML = townStats.towns[4].name;
        document.getElementById('mottoP').innerHTML = townStats.towns[4].motto;
        document.getElementById('foundedP').innerHTML = townStats.towns[4].yearFounded;
        document.getElementById('populationP').innerHTML = townStats.towns[4].currentPopulation;
        document.getElementById('rainfallP').innerHTML = townStats.towns[4].averageRainfall;

        document.getElementById('nameS').innerHTML = townStats.towns[5].name;
        document.getElementById('mottoS').innerHTML = townStats.towns[5].motto;
        document.getElementById('foundedS').innerHTML = townStats.towns[5].yearFounded;
        document.getElementById('populationS').innerHTML = townStats.towns[5].currentPopulation;
        document.getElementById('rainfallS').innerHTML = townStats.towns[5].averageRainfall;

        document.getElementById('nameF').innerHTML = townStats.towns[1].name;
        document.getElementById('mottoF').innerHTML = townStats.towns[1].motto;
        document.getElementById('foundedF').innerHTML = townStats.towns[1].yearFounded;
        document.getElementById('populationF').innerHTML = townStats.towns[1].currentPopulation;
        document.getElementById('rainfallF').innerHTML = townStats.towns[1].averageRainfall;
}

    