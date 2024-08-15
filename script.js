import cloudy from "./assets/cloudy.svg";
import day from "./assets/day.svg";
import rainy from "./assets/rainy.svg";
import snowy from "./assets/snowy.svg";

let location = "";

const weatherEmoji = document.getElementById("weather-emoji");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const apiKey = import.meta.env.VITE_API_KEY;

async function getWeather() {
  location = cityInput.value.trim();
  cityInput.value = "";

  if (!location) {
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${location}&units=metric`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  const main = data.weather[0].main;
  let emoji = "";

  if (main == "Clouds") {
    emoji = cloudy;
  }
  if (main == "Rain") {
    emoji = rainy;
  }
  if (main == "Clear") {
    emoji = day;
  }
  if (main == "Snow") {
    emoji = snowy;
  }

  weatherEmoji.src = emoji;
  temp.textContent = Math.trunc(data.main.temp) + "°C";
  city.textContent = data.name;
}

searchBtn.addEventListener("click", getWeather);
