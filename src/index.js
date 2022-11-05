import "./styles.css";
import { getData } from "./data";
import { addSearch, clearError, inputEvent } from "./events";
import { updateWeatherInformation } from "./update";
(() => {
  // get initial weather data
  getData("Berlin");
  // add eventListener
  addSearch();
  inputEvent();
  clearError();
})();
