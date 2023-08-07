import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
 let weatherData = {
   city: "Zurich",
   temperature: 25,
   date: "Tuesday 12:00",
   description: "Cloudy",
   imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
   humidity: 70,
   wind: 8,
 }
 let [temperature, setTemperature] = useState(null);
 const apiKey = "e6of3eft9b8b2d2d01acb75fe44431a9";
 const apiEndpoint = "https://api.shecodes.io/weather/v1/current";
 let city = "London"
 let units = "metric"
 let apiUrl = `${apiEndpoint}?query=${city}&key=${apiKey}&units=${units}`;

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
         
          />
         
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

}