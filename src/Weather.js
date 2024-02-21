import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);

  function displayTemperature(response) {
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
      icon: "☼",
    });
  }

  if (weatherData) {
    return (
      <section>
        <h2>
          {weatherData.city}
          <span>
            {weatherData.icon} {weatherData.temperature}{" "}
            <span className="unit"> °C I °F</span>
          </span>
        </h2>
        <p>
          <span className="description">
            thursday 15:54, {weatherData.description} <br />
            precipitation: 82%, wind: {weatherData.wind}km/h
          </span>{" "}
        </p>
      </section>
    );
  } else {
    const city = "Warsaw";
    const apiKey = "fc033e4428deacf92tb6o5f960d83508";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);

    return "Loading...";
  }
}
