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



// let forcast = {
//     "apiKey": "a70e2b641a8eef3eebb1dbd12069836a",
//     fetchForcast: function(city) {
//             fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + this.apiKey + "&units=imperial")
//             .then ((response) => response.json())
//             .then ((data) => this.displayForcast(data))
//     },
//     displayForcast: function(data) {
//         const { icon } = data.list[0].weather.icon;
//         const { temp } = data.list[0].main.temp_max;
//         const { wind } = data.list[0].wind.speed;
//         const { humidity } = data.list[0].main.humidity;
//         document.querySelector(".icon0").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
//         document.querySelector('.temp0').innerText = "Temp: " + temp + ' F'
//         document.querySelector('.wind0').innerText = "Wind: " + wind + " MPH"
//         document.querySelector('.humidity0').innerText = "Humidity: "  + humidity + ' %'
//     },
//     search: function() {
//         this.fetchForcast(document.querySelector('.city-input').value);
//     }
// };
const cityInput = document.querySelector('.city-input');
const text = document.querySelector('.text');
const button = document.querySelector('search-button')
const storedInput = localStorage.getItem('city');

if(cityInput) {
    text.textContent = storedInput
}

cityInput.addEventListener('input', i => {
    text.textContent = i.target.value
})

const saveToLs = () => {
    localStorage.setItem('city', text.textContent)
}

document.querySelector(".search-button").addEventListener("click", function() { 
    weather.search()
    saveToLs()
});

// document.querySelector(".search-button").addEventListener("click", function() { 
//     forcast.search();
// });