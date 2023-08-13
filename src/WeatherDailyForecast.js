import React from "react";
import "./WeatherDailyForecast.css";

export default function WeatherDailyForecast(props) {
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
