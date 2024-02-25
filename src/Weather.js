import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, searchCity] = useState(props.defaultCity);

  function displayTemperature(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.city,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
    const apiKey = "f5e814a04eddfab1740f07bf0328eee2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  if (weatherData) {
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="searchBar"
            onChange={handleCityChange}
          ></input>
          <input
            type="submit"
            className="submit"
            value="🔍
        "
          ></input>
        </form>
        <WeatherInfo data={weatherData} />
      </section>
    );
  } else {
    search();
    return "Loading...";
  }
}
