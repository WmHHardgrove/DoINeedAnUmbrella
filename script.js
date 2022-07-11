let weather = {
    "apiKey": "a70e2b641a8eef3eebb1dbd12069836a",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + this.apiKey + "&units=imperial")
        .then ((response) => response.json())
        .then((data) => console.log(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        

    }
};