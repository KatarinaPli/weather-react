import React from "react";
import "./Weather.css";

export default function Weather(){
 let weatherData = {
   city: "Zurich",
   temperature: 25,
   date: "Tuesday 12:00",
   description: "Cloudy",
   imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
   humidity: 70,
   wind: 8,
 };
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
      <ul>
        <li>Last updated: {weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
    </div>
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="float-left"
          />
          <div className="float-left">
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
    </div>
    <p className="link-source">
      <a href="https://github.com/KatarinaPli/weather-react" alt="GitHub link">
        Open-source code
      </a>
      , by Kateryna Shyrokova from{" "}
      <a href="https://www.shecodes.io/graduates/68955-kateryna-shyrokova" alt="SheCodes link">
        SheCodes
      </a>
    </p>
  </div>
  
);

}