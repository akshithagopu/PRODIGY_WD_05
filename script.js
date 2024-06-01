const apiKey = 'e66f4858bf299e65fede393d3bcdaaa4'; 

function getWeatherByLocation(location) {
    const url ='https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric';
    console.log(`Fetching weather data for location: ${location} from: ${url}`);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data); 
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}

function getWeatherByInput() {
    const location = document.getElementById('locationInput').value;
    if (!location) {
        alert('Please enter a location.');
        return;
    }
    getWeatherByLocation(location);
}

function displayWeather(data) {
    const locationName = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weatherDescription');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');

    locationName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

function onButtonClick() {
    getWeatherByInput();
}
