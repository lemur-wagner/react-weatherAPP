import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2>
        {props.data.city}
        <span className="WeatherMain">
          <span className="WeatherIcon">
            <WeatherIcon icon={props.data.icon} size={70} />
          </span>
          <span className="WeatherTemperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </span>
      </h2>
      <p>
        <div className="description">
          <FormattedDate date={props.data.date} />
          description: {props.data.description} <br />
          humidity: {props.data.humidity}%, wind: {props.data.wind}km/h
        </div>{" "}
      </p>
    </div>
  );
}
