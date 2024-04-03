import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function setCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span>{props.celsius}</span>
        <span className="unit">
          {" "}
          C° I{" "}
          <a href="_blank" onClick={displayFahrenheit}>
            F°
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span className="WeatherTemperature">
        <span>{fahrenheit}</span>
        <span className="unit">
          {" "}
          <a href="_blank" onClick={setCelsius}>
            C°
          </a>{" "}
          I F°
        </span>
      </span>
    );
  }
}
