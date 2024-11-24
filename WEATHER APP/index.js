const apikey = "6e1502b98ac79442721c6fda63ade1ef";

const weatherDataElem = document.getElementById("weather-data");

const cityInputElem = document.getElementById("city-input");

const formElem = document.querySelector("form");

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputElem.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.main.wind.speed}m/s`,
    ];

    weatherDataElem.querySelector(
      ".icon"
    ).innerHTML = `  <img src="http://openweathermap.org/img/wn/${icon}.png" />`;
    weatherDataElem.querySelector(
      ".temperature"
    ).textContent = `${temperature}°C`;
    weatherDataElem.querySelector(
      ".description"
    ).textContent = `${description}`;
    weatherDataElem.querySelector(".details").innerHTML = details
      .map((detail) => {
        `<div>${detail}/div>`;
      })
      .join("");
  } catch (error) {
    weatherDataElem.querySelector(".icon").innerHTML = "";
    weatherDataElem.querySelector(".temperature").textContent = "";
    weatherDataElem.querySelector(".description").textContent =
      "An error happened, please try again later";

    weatherDataElem.querySelector(".details").innerHTML = "";
  }
}
