const search_box = document.getElementById("search-box");
const btn = document.getElementById("btn");
const temp = document.getElementById("temp");
const ws = document.getElementById("windspeed");
const Humeday = document.getElementById("Humeday");
const city = document.getElementById("city-name");
const err = document.getElementById("404");
const weather_body = document.getElementById("weather-body");
const Err = document.getElementById("error");
const discription = document.getElementById("discription");
const sun_img = document.getElementById("sun-img");

async function checkWeather(city_name) {
  const api_key = "f37d5094ef30b25e27468f7ecb240b98";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

  const weatherData = await fetch(`${url}`).then((Response) => Response.json());
  console.log(weatherData);

  //  search_box.value=" ";

  temp.innerHTML =
    Math.round(`${weatherData.main.temp - 273.15}`) + "<sup>°C<sup>";

  city.innerHTML = `${weatherData.name}`;

  Humeday.innerHTML = `${weatherData.main.humidity}%`;

  ws.innerHTML = `${weatherData.wind.speed}km/h`;

  discription.innerHTML = `${weatherData.weather[0].main}`;

  if (weatherData.cod === "404") {
    alert("Enter Valid City Name");
    Err.style.display = "flex";
    weather_body.style.display = "none";
    return;
  } else {
    weather_body.style.display = "flex";
  }

  // Sun Image Changes

  switch (weatherData.weather[0].main) {
    case "Clear":
      sun_img.src = "/images/weather.png";
      break;

    case "Clouds":
      sun_img.src = "/images/cloud.png";
      break;

    case "Mist":
      sun_img.src = "images/mist.png";
      break;

    case "Rain":
      sun_img.src = "images/rain.png";
      break;

    case "Snow":
      sun_img.src = "images/snow.png";
      break;

    case "Haze":
      sun_img.src = "images/haze.png";
  }
}

btn.addEventListener("click", () => {
  checkWeather(search_box.value);
  search_box.value=''
});
