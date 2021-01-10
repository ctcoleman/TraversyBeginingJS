class Weather {
  constructor(city, state) {
    this.apiKey = '707ce481c6934ca0ad46d543788255df'
    this.city = city
    this.state = state
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=imperial`)

    const responseData = await response.json()

    return responseData
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city
    this.state = state
  }
}

