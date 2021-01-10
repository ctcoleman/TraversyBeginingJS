// Initialize storage
const storage = new Storage()

// Get stored location data
const weatherLocation = storage.getLocationData()

// Initialize the Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state)

// Initialize UI
const ui = new UI()

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', weather.getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value

  weather.changeLocation(city, state)

  // Set location is LS
  storage.setLocationData(city, state)

  // Get and display weather
  weather.getWeather()

  // Close the modal - jQuery warning
  $('#locModal').modal('hide')
})

// weather.changeLocation('Miami', 'Florida')

weather.getWeather()
  .then(results => {
    ui.paint(results)
  })
  .catch(err => console.log(err))