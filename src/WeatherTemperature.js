import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <strong>{Math.round(props.celsius)}</strong>

        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <strong>{Math.round(fahrenheit())}</strong>

        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F{" "}
        </span>
      </span>
    );
  }
}
