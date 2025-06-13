const apikey = "63038d1cd3634b2cd0756023cdfe44a0";

const button = document.getElementById('button');
const cityInput = document.getElementById('input');
const weatherinfo = document.getElementById('weather-info');
const showErrorDiv = document.getElementById('showError');

button.addEventListener("click", () => {
    const city = cityInput.value.trim(); 
    if (city === "") {
        showError('Please enter a city name');
    } else {
        fetchData(city);
    }
});

async function fetchData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.cod === "404") {
            showError('City not found');
        } else {
            displayData(data);
        }
    } catch (error) {
        showError('Cannot fetch data');
    }
}

function displayData(data) {
    weatherinfo.innerHTML = `
        <h2>City Name: ${data.name}</h2>
        <p>Country: ${data.sys.country}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Wind Direction: ${data.wind.deg}°</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    showErrorDiv.textContent = ""; 
}

function showError(msg) {
    showErrorDiv.textContent = msg;
    weatherinfo.textContent = '';
}

 

