import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2>
        {props.data.city}
        <span>
          {props.data.icon} {props.data.temperature}{" "}
          <span className="unit"> °C I °F</span>
        </span>
      </h2>
      <p>
        <span className="description">
          <FormattedDate date={props.data.date} />, {props.data.description}{" "}
          <br />
          precipitation: 82%, wind: {props.data.wind}km/h
        </span>{" "}
      </p>
    </div>
  );
}
