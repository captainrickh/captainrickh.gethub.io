
    var t = parseInt(document.getElementById('temp').innerHTML);
    var s = parseInt(document.getElementById('speed').innerHTML);

    var f = (35.74 + (.6215 * t) - (35.75 * Math.pow(s, .16)) + (.4275 * t * (Math.pow(s, .16))));

    document.getElementById('output').innerHTML = f.toFixed(0) + "&deg;F";

    