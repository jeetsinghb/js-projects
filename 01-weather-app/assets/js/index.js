const apiKey = "c7bcdfe4f577a4fbe2087be45dfee2d8";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const loader = document.getElementById("loader");
const searchInput = document.getElementById("input-box");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather");
const error = document.querySelector(".error-message");
const contentWrapper = document.querySelector(".weather-data");

function displayError(message) {
  error.textContent = message;
  error.style.display = "block";
  contentWrapper.style.display = "none";
  searchInput.classList.add("error");
  weatherIcon.src = "";
}

function updateWeatherUI(data) {
  contentWrapper.style.display = "block";
  error.style.display = "none";
  searchInput.classList.remove("error");

  document.querySelector(".degree").innerHTML = `${Math.round(data.main.temp)}&deg;C`;
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
  document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

  const icon = data.weather[0]?.main;
  weatherIcon.src = icon ? `./assets/icons/gif/${icon}.gif` : "";
}

async function fetchWeather(city) {
  loader.style.display = "block";
  try {
    const response = await fetch(
      `${apiURL}${encodeURIComponent(city)}&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    updateWeatherUI(data);
  } catch (err) {
    displayError("Invalid city name");
  } finally {
    loader.style.display = "none";
  }
}

// Reset error state on input
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim().length === 0) {
    searchInput.classList.remove("error");
    error.style.display = "none";
  }
});

// Search button click handler
searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city === "") {
    searchInput.focus();
    searchInput.classList.add("error");
  } else {
    fetchWeather(city);
  }
});
