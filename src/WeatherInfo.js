import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2>
        {props.data.city}
        <div>
          <WeatherIcon icon={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
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
