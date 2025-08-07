// script.js - Simplified solution with direct variable editing

// STEP 1: Get the HTML element we need to work with
var weatherDisplay = document.getElementById("weatherDisplay");

// STEP 2: EDIT THESE VARIABLES
// ACTIVITY 1: Change this to your favorite city
var cityName = "Tokyo";

// ACTIVITY 2: Replace with your own API key from OpenWeatherMap
var apiKey = "REPLACE_WITH_YOUR_API_KEY";

// STEP 3: This part is already set up for you
// Don't worry about understanding this code yet - we'll learn about it in the future!
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric";

// This code loads when the page opens - it's advanced code you'll learn later!
window.onload = function() {
    // Show loading message
    weatherDisplay.innerHTML = "<p>Loading weather data for " + cityName + "...</p>";
    
    // This part gets the weather data from the internet
    fetch(apiUrl)
        .then(function(response) {
            if (!response.ok) {
                weatherDisplay.innerHTML = "<p>Error: City not found. Try another city!</p>";
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(function(data) {
            // These variables contain the weather information
            var cityTemp = data.main.temp;
            var weatherDesc = data.weather[0].description;
            var iconCode = data.weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            
            // STEP 4: Display the weather information
            
            // This displays the city name and temperature (already done for you)
            weatherDisplay.innerHTML = "<h2>" + cityName + "</h2>" + 
                                    "<p>Temperature: " + cityTemp + "°C</p>";
            
            // ACTIVITY 3: Display the weather description
            // YOUR CODE HERE:
            // SOLUTION:
            weatherDisplay.innerHTML = weatherDisplay.innerHTML + "<p>Weather: " + weatherDesc + "</p>";
            
            // ACTIVITY 4: Display the weather icon
            // YOUR CODE HERE:
            // SOLUTION:
            weatherDisplay.innerHTML = weatherDisplay.innerHTML + "<img src='" + iconUrl + "' width='100' height='100'>";
        })
        .catch(function(error) {
            console.log("Error:", error);
            weatherDisplay.innerHTML = "<p>Error: Something went wrong. Try again later.</p>";
        });
};