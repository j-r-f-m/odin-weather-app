/**
 * update inofrmation of card
 *
 * @param {object} weatherObj cleaned object with weather information
 */
const updateWeatherInformation = (weatherObj) => {
  console.log(weatherObj);
  // update weather description
  const weatherDescription = document.getElementById("weather-description");
  weatherDescription.textContent = weatherObj.description;
  // update city name and country
  const cityName = document.getElementById("city-name");
  cityName.textContent = `${weatherObj.name}, ${weatherObj.country}`;

  // update temprature
  const temprature = document.getElementById("temperature");
  temprature.textContent = `Temperature: ${weatherObj.temp} [°C]`;
  // update feels like
  const feelsLike = document.getElementById("feels-like");
  feelsLike.textContent = `Feels like: ${weatherObj.feels_like} [°C]`;
  // update wind speed
  const windSpeed = document.getElementById("wind-speed");
  windSpeed.textContent = `Wind speed: ${weatherObj.wind_speed} [km/h]`;
  console.log(weatherDescription);

  // update humidity
  const humidity = document.getElementById("humidity");
  humidity.textContent = `Humidity: ${weatherObj.humidity} [%]`;
  //console.log(weatherObj.weather.description);
  //weatherDescription.value = weatherObj.weather.description;
};

export { updateWeatherInformation };
