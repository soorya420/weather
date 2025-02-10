// variables
var temp, maxtemp, mintemp, desc, wind, hum, main, day, night;
var x = [
  "clear sky",
  "few clouds",
  "scattered clouds",
  "tornado",
  "shower rain",
  "mist",
  "thunderstorm",
  "rain",
  "snow",
  "haze",
  "broken clouds",
  "drizzle"
];

var y = [
  "icon/sunny.jpg",
  "icon/overcast.jpg",
  "icon/cloudy.jpg",
  "icon/tornado.jpg",
  "icon/fog.jpg",
  "icon/showers.jpg",
  "icon/rain.jpg",
  "icon/thunderstorm.jpg",
  "icon/snow.jpg",
  "icon/fog.jpg"
];

var z = [
  "icon/clear.jpg",
  "icon/night-cloudy.jpg",
  "icon/cloudy.jpg",
  "icon/tornado.jpg",
  "icon/fog.jpg",
  "icon/showers.jpg",
  "icon/night-rain.jpg",
  "icon/thunderstorm.jpg",
  "icon/snow.jpg",
  "icon/fog.jpg"
];

function weather(input) {
  var city = input;
  var im = document.querySelector('#icon');
  var myurl = "http://api.openweathermap.org/data/2.5/weather?";
  var key = "95a033c56b5a31315afe54dcf1e94b0f"; // Updated API Key
  var url = myurl + "appid=" + key + "&units=metric&q=" + city;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      temp = data.main.temp;
      document.querySelector("#deg").innerHTML = Math.round(temp) + "&deg;C";

      mintemp = data.main.temp_min;
      document.querySelector("#min").innerHTML = Math.round(mintemp) + "&deg;C";

      maxtemp = data.main.temp_max;
      document.querySelector("#max").innerHTML = "/" + Math.round(maxtemp) + "&deg;C";

      wind = data.wind.speed;
      document.querySelector("#wind").innerHTML = Math.round(wind) + " mph";

      hum = data.main.humidity;
      document.querySelector("#humidity").innerHTML = hum + "%";

      desc = data.weather[0].description;
      document.querySelector('#description').innerHTML = desc;

      var dn = data.dt;
      day = data.sys.sunrise;
      night = data.sys.sunset;

      if (dn >= night) {
        // It's night time, change the icon accordingly
        switch (desc) {
          case x[0]: im.src = z[0]; break;
          case x[1]: im.src = z[1]; break;
          case x[2]: im.src = z[2]; break;
          case x[3]: im.src = z[3]; break;
          case x[4]: im.src = z[4]; break;
          case x[5]: im.src = z[5]; break;
          case x[6]: im.src = z[6]; break;
          case x[7]: im.src = z[7]; break;
          case x[8]: im.src = z[8]; break;
          case x[9]: im.src = z[9]; break;
          case x[10]: im.src = z[10]; break;
          case x[11]: im.src = z[11]; break;
        }
      } else if (dn >= day) {
        // It's day time, change the icon accordingly
        switch (desc) {
          case x[0]: im.src = y[0]; break;
          case x[1]: im.src = y[1]; break;
          case x[2]: im.src = y[2]; break;
          case x[3]: im.src = y[3]; break;
          case x[4]: im.src = y[4]; break;
          case x[5]: im.src = y[5]; break;
          case x[6]: im.src = y[6]; break;
          case x[7]: im.src = y[7]; break;
          case x[8]: im.src = y[8]; break;
          case x[9]: im.src = y[9]; break;
          case x[10]: im.src = y[10]; break;
          case x[11]: im.src = y[11]; break;
        }
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Function to convert temperatures to Fahrenheit
function convertTemperature(detector) {
  if (detector == "fahrenheit") {
    var far = (temp * 9 / 5) + 32;
    var farmin = (mintemp * 9 / 5) + 32;
    var farmax = (maxtemp * 9 / 5) + 32;

    document.querySelector("#deg").innerHTML = Math.round(far) + "&deg;F";
    document.querySelector("#min").innerHTML = Math.round(farmin) + "&deg;F";
    document.querySelector("#max").innerHTML = "/" + Math.round(farmax) + "&deg;F";
  } else {
    document.querySelector("#deg").innerHTML = Math.round(temp) + "&deg;C";
    document.querySelector("#min").innerHTML = Math.round(mintemp) + "&deg;C";
    document.querySelector("#max").innerHTML = "/" + Math.round(maxtemp) + "&deg;C";
  }
}
