let location = "miami";

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

  temp.textContent = Math.trunc(data.main.temp) + "°C";
  city.textContent = data.name;
}

searchBtn.addEventListener("click", getWeather);
