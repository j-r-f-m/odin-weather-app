import "./styles.css";
import IMAGE_ERROR from "./error.jpg";

const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=Ct8ufo7T65WM4M3MI4zDbICWZCBXvbne&s=cats"
)
  .then((response) => response.json())
  .then((response) => {
    img.src = response.data.images.original.url;
  });

// search for image
const searchInput = document.getElementById("search-input");
console.log(searchInput);
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  console.log(searchInput.value);
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=Ct8ufo7T65WM4M3MI4zDbICWZCBXvbne&s=${searchInput.value}`
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch(() => {
      img.src = IMAGE_ERROR;
    });
});
console.log(searchBtn);
