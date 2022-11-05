import { updateWeatherInformation } from "./update";

/**
 * get weather-obj from api
 * call function that cleans weahter object from unwanted information
 * call function that updates data on page
 * call function on error
 * @param {string} cityName name of city we want the weather data for
 * @return {object} with weather information for specified city
 */
export async function getData(cityName) {
  try {
    const responseWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=00b749c7a719f0b37fa49eed4019e513&units=metric`,
      {
        mode: "cors",
      }
    );
    // unpack raw data
    const dataWeather = await responseWeather.json();
    console.log(dataWeather);
    // clean data
    const cleanData = cleanWeatherData(dataWeather);
    // update dom
    updateWeatherInformation(cleanData);
  } catch (err) {
    console.log(err);
  }
}

/**
 * clean obj from api and return new object with only the infromation we display
 * on the page
 *
 * @param {object} weatherObj with infromation from api
 * @return {object} return new object with only the infromation we want to display
 *
 */
const cleanWeatherData = (weatherObj) => {
  // initilize object
  const cleanDataObj = {};

  // fill it with relevant data
  cleanDataObj.description = weatherObj.weather[0].description;
  cleanDataObj.name = weatherObj.name;
  cleanDataObj.temp = weatherObj.main.temp;
  cleanDataObj.feels_like = weatherObj.main.feels_like;
  cleanDataObj.wind_speed = weatherObj.wind.speed;
  cleanDataObj.humidity = weatherObj.main.humidity;

  return cleanDataObj;
};
