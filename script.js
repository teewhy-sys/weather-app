const API_KEY = "YOUR_API_KEY_HERE";

// get input
function getCity() {
  return document.getElementById("cityInput").value.trim();
}

// fetch data
async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response.json();
}

// render UI
function displayWeather(data) {
  const result = document.getElementById("result");

  result.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Condition: ${data.weather[0].description}</p>
  `;
}

// main function
async function fetchWeather() {
  const city = getCity();

  if (!city) {
    alert("Enter a city name");
    return;
  }

  try {
    const data = await fetchWeatherData(city);
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}