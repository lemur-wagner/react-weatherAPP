import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  console.log(props);
  return (
    <div className="row">
      <div className="col"></div>
      <div className="Forecast-day">{props.data.dt}</div>
      <div className="icon">
        <WeatherIcon icon="01d" size={35} />
      </div>
      <div className="forecast-temperatures">
        <span className="forecast-temperature-min">
          {props.data.temp.min}°{" "}
        </span>
        <span className="forecast-temperature-max">{props.data.temp.max}°</span>
      </div>
    </div>
  );
}
