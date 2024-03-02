import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col"></div>
        <div className="day">Thu</div>
        <div className="icon">
          <WeatherIcon icon="01d" size="35" />
        </div>
        <div className="forecast-temperatures">
          <span className="min">10° </span>
          <span className="max">17°</span>
        </div>
      </div>
    </div>
  );
}
