import { doc } from "prettier";
import { getData } from "./data";
import { updateCard } from "./update";

/**
 * display error message
 *
 * @param {object} inputObj input object that receives the error message
 * @param {string} errorMessage that is displayed
 */
const inputMessage = (inputObj, errorMessage) => {
  // set error message
  inputObj.setCustomValidity(errorMessage);
  // display error messsage
  inputObj.reportValidity();
};
/**
 * when the user presses enter or clicks the button and the input field is empty
 * an error message appears below the input filed (inputMessage())
 * if the user now starts to type in the input field the message is still there
 * it does not look good!
 * the eventlistener fires after each keypress and removes the error message if
 * it is there
 */
const clearError = () => {
  const inputSearch = document.getElementById("search-input");
  inputSearch.addEventListener("input", () => {
    // remove error message
    inputSearch.setCustomValidity("");
    console.log("on input");
  });
};

/**
 * add eventlistener to search button
 * start search on clicking button
 */
const addSearch = () => {
  // get input
  const inputSearch = document.getElementById("search-input");
  // get button
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", () => {
    if (inputSearch.validity.valueMissing) {
      inputMessage(inputSearch, "Enter a city name!");
    } else {
      // set message (.setCustomValidity()) to empty string if there are no
      // errors. As long as the error message is not  empty, the form will not
      // pass validation and will not be submitted
      inputSearch.setCustomValidity("");
      const weatherObj = getData(`${inputSearch.value}`);
    }
  });
};

/**
 * add eventlistener to input field
 * start search on hitting enter
 */
const inputEvent = () => {
  const input = document.getElementById("search-input");
  //console.log(input);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      // prevent default action -> without this pressing enter with valid city name
      // did not do anything
      e.preventDefault();
      if (input.validity.valueMissing) {
        inputMessage(input, "Enter a city name!");
      } else {
        const weatherObj = getData(`${input.value}`);
      }
    }
  });
};

export { addSearch, inputEvent, clearError, inputMessage };
