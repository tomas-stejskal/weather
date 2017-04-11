charset = "UTF-8";

var counries = [
    "Slovakia",
    "Czech Republic",
    "Hungary",
    "Poland",
    "Greece",
    "Ukraine",
    "Russia",
    "Croatia",
    "Serbia",
    "Bulgaria",
    "Romania"
];

var cityes = [
    ["Bratislava", "Kosice", "Presov", "Banska Bystrica", "Zilina", "Nitra", "Michalovce", "Trencin", "Trnava"],
    ["Praha", "Brno", "Olomouc", "Ostrava", "Plzen", "Kolin"],
    ["Budapest", "Miskolc", "Debrecen", "Gyor", "Szeger", "Gyor", "Tiszaujvaros", "Szeged"],
    ["Warszava", "Krakow", "Lodz", "Kratovice", "Gdansk", "Bialystok", "Szcezecin"],
    ["Athens", "Patras", "Heraklion", "Rhodes", "Thessaloniki", "Kavala"],
    ["Kiev", "Uzhhorod", "Lviv", "Rivne", "Odessa", "Poltva"],
    ["Moscow", "St Petersburg", "Kaliningrad", "Tula", "Murmansk", "Novosibirsk", "Omsk", "Vladivostok", "Volgograd"],
    ["Zagreb", "Dubrovnik", "Split", "Krk", "Virovitica"],
    ["Belgrade", "Sabac", "Novi Sad", "Cacak", "Leskovac"],
    ["Sofia", "Varna", "Burgas", "Pleven", "Plovdiv"],
    ["Bucuresti","Constanta","Timisoara","Iasi"]
];

function initCounries() {
    var combo = document.getElementById("combo-country");
    for (var i = 0; i < counries.length; i++) {
        var option = document.createElement("option");
        option.text = counries[i];
        option.value = i;
        combo.add(option);
    }
    initCityes();
}

function initCityes() {
    purgeCombpCity();
    purgeCombpCity();
    purgeCombpCity();
    purgeCombpCity();
    var combo = document.getElementById("combo-city");
    var index = document.getElementById("combo-country").value;
    for (var i = 0; i < cityes[index].length; i++) {
        var option = document.createElement("option");
        option.text = cityes[index][i];
        combo.add(option);
    }
}

function purgeCombpCity() {
    var combo = document.getElementById("combo-city");
    for (var i = 0; i < combo.length; i++) {
        combo.remove(i);
    }
}

function loadJson() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            writeData(this.response);
        }
    };
    var combo = document.getElementById("combo-city");
    var url = "http://api.apixu.com/v1/current.json?key=b858f0816def43fa89b161205171004&q=" + combo.options[combo.selectedIndex].text;
   // console.log(url);
    xhttp.open("GET",url , true);
    xhttp.send();
}

function writeData(data) {
    data = JSON.parse(data);
    //console.log(data);
   // console.log(typeof data);
    document.getElementById("country").innerHTML = data.location.country + " ";
    document.getElementById("city").innerHTML = data.location.region;
    document.getElementById("lat").innerHTML = data.location.lat + " ";
    document.getElementById("lon").innerHTML = data.location.lon;
    document.getElementById("temp_c").innerHTML = data.current.temp_c + " \u00B0C";
    document.getElementById("temp_f").innerHTML = data.current.temp_f + " \u00B0F";
    document.getElementById("localtime").innerHTML = "Local time: " + data.location.localtime;
    document.getElementById("day").innerHTML = data.current.is_day;
    document.getElementById("status").innerHTML = data.current.condition.text;
    document.getElementById("pressure").innerHTML = "Pressure: " + data.current.pressure_mb;
    document.getElementById("wind_kph").innerHTML = "Wind km per hour: " + data.current.wind_kph;
    document.getElementById("wind_mph").innerHTML = "Wind m per hour: " + data.current.wind_mph;
    document.getElementById("visibility").innerHTML = "Visibility (km): " + data.current.vis_km;
}


var temp = { "location": { "name": "Kosice", "region": "Kosice", "country": "Slovakia", "lat": 48.72, "lon": 21.25, "tz_id": "Europe/Bratislava", "localtime_epoch": 1491892017, "localtime": "2017-04-11 8:26" }, "current": { "last_updated_epoch": 1491891300, "last_updated": "2017-04-11 08:15", "temp_c": 10.0, "temp_f": 50.0, "is_day": 1, "condition": { "text": "Sunny", "icon": "//cdn.apixu.com/weather/64x64/day/113.png", "code": 1000 }, "wind_mph": 5.6, "wind_kph": 9.0, "wind_degree": 10, "wind_dir": "N", "pressure_mb": 1013.0, "pressure_in": 30.4, "precip_mm": 0.4, "precip_in": 0.02, "humidity": 82, "cloud": 0, "feelslike_c": 8.8, "feelslike_f": 47.9, "vis_km": 10.0, "vis_miles": 6.0 } };
