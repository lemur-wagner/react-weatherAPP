import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, searchCity] = useState(props.defaultCity);

  function displayTemperature(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    searchCity(event.target.value);
  }

  function search() {
    const apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  if (weatherData) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="searchBar"
            onChange={handleCityChange}
          ></input>
          <input
            type="submit"
            className="submit"
            value=" SEARCH
        "
          ></input>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
