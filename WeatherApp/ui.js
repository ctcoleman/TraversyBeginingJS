class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.detials = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.feelsLike = document.getElementById('w-feels-like')
    this.humidity = document.getElementById('w-humidity')
    this.maxTemp = document.getElementById('w-max-temp')
    this.minTemp = document.getElementById('w-min-temp')
    this.currentTemp = document.getElementById('w-current-temp')
  }

  paint(weather) {

    // Get the weather icon
    const weatherIcon = weather.weather[0].icon
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`)

    // Get data and display
    this.desc.textContent = weather.weather[0].main
    this.location.textContent = `${weather.name}, ${weather.sys.country}`
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`
    this.maxTemp.textContent = `Max Temp: ${weather.main.temp_max}`
    this.minTemp.textContent = `Min Temp: ${weather.main.temp_min}`
    this.currentTemp.textContent = `${weather.main.temp} F`
  }
}
