let weather = {
    "apiKey": "a70e2b641a8eef3eebb1dbd12069836a",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + this.apiKey + "&units=imperial")
        .then ((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon, description, temp, humidity, speed)
        document.querySelector('.city-name').innerText = "Current weather in " + name;
        document.querySelector('.weather-icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector('.weather-description').innerText = "Looking out the window I see " + description
        document.querySelector('.wind').innerText = "Wind speed is " + speed + " MPH"
        document.querySelector('.humidity').innerText = "The Humidity is " + humidity + " %"
        document.querySelector('.temperature').innerText = temp + " degrees F"
    },

    search: function() {
        this.fetchWeather(document.querySelector('.city-input').value);
    },

};




document.querySelector(".search-button").addEventListener("click", function() { 
    weather.search();
});