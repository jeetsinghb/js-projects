document.getElementById("input_form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputField = document.getElementById("input_field");
  const trimmedValue = inputField.value.trim();

  if (!trimmedValue) {
    alert("Please enter a valid IP address.");
    return;
  }

  await fetchIpDetails(trimmedValue);
});

const ipField = document.getElementById("ip");
const locationField = document.getElementById("location");
const timezoneField = document.getElementById("timezone");
const ispField = document.getElementById("isp");
const loader = document.getElementById("loader");

const API_KEY = "";

async function fetchIpDetails(ip) {
  try {
    if (loader) loader.style.display = "block";

    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );

    if (!response.ok) {
      throw new Error("Invalid Input");
    }

    const data = await response.json();

    ipField.textContent = data.ip || "N/A";
    locationField.textContent = `${data.location?.city || "N/A"}, ${
      data.location?.region || "N/A"
    }`;
    timezoneField.textContent = data.location?.timezone || "N/A";
    ispField.textContent = data.isp || "N/A";
  } catch (error) {
    alert(error.message || "Something went wrong.");
  } finally {
    if (loader) loader.style.display = "none";
  }
}
