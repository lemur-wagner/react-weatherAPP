import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [forecast, setForecast] = useState("");

  function displayForecast(response) {
    setForecast(response.data.daily);
  }

  let apiKey = "3dce9b1c66837262a25b3f448d354a76";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="Forecast">
      <ForecastDay data={forecast[0]} />
    </div>
  );
}
