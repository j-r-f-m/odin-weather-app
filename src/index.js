import "./styles.css";

async function printDoc() {
  try {
    const responseWeather = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=00b749c7a719f0b37fa49eed4019e513",
      {
        mode: "cors",
      }
    );
    const dataWeather = await responseWeather.json();
    console.log(dataWeather);
  } catch (err) {
    console.log(err);
  }
}

printDoc();
