import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2>
        {props.data.city}
        <div>
          <WeatherIcon icon={props.data.icon} />
          {props.data.temperature} <span className="unit"> °C I °F</span>
        </div>
      </h2>
      <p>
        <div className="description">
          <FormattedDate date={props.data.date} />
          description: {props.data.description} <br />
          precipitation: 82%, wind: {props.data.wind}km/h
        </div>{" "}
      </p>
    </div>
  );
}
