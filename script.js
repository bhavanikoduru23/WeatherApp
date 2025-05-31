link = "https://api.openweathermap.org/data/2.5/weather?q=machilipatnam&appid=ab964371d9e14eca4388a4929d54a14d"
var request = new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var obj = JSON.parse(this.response);
        console.log(obj);
        document.getElementById("weather").innerHTML = obj.weather[0].description;
        document.getElementById("location").innerHTML = obj.name;
        document.getElementById("temp").innerHTML = Math.floor(obj.main.temp - 273.15);
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + obj.weather[0].icon + ".png";

    }

    else {
        console.log("error");
    }
}
request.send();