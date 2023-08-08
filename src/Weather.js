import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FomatedDate from "./FomatedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      humidity: Math.round(response.data.temperature.humidity),
      description: response.data.condition.description,
      imgUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.description}.png`,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul className="text-decoration-none">
            <li>
              <FomatedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize ">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img src={weatherData.imgUrl} alt={weatherData.description} />

              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e6of3eft9b8b2d2d01acb75fe44431a9";
    const apiEndpoint = "https://api.shecodes.io/weather/v1/current";
    let city = "London";
    let units = "metric";
    let apiUrl = `${apiEndpoint}?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
