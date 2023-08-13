import React from "react";
import "./WeatherDailyForecast.css";
import axios from "axios";

export default function WeatherDailyForecast(props) {
  function handleResponse (response){
    console.log(response.data)
  }
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiKey = "e6of3eft9b8b2d2d01acb75fe44431a9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse)
  return (
    <div className="WeatherDailyForecast">
      <div className="row">
        <div className="col">
          <div className="Weather-forecast-day">Tue</div>
          <img src={props.data.imgUrl} alt={props.data.description} />
          <div className="Weather-forecast-temperatures">
            <span className="Weather-forecast-temp-max">16°</span>
            <span className="Weather-forecast-temp-min">8°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
