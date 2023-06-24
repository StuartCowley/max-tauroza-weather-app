import React from "react";
import "../styles/ForecastDetails.css";
import iconData from "../data/iconData.json";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <h2 className="forecast-details_date">{formattedDate}</h2>
      <div className="forecast-details_maximum_temperature">
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details_minimum_temperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details_humidity">Humidity: {humidity}</div>
      <div className="forecast-details_wind">
        Wind: {wind.speed}
        <img
          src={iconData.wind[wind.direction]}
          alt={`Icon for ${wind.direction} wind direction`}
        />
      </div>
    </div>
  );
};

export default ForecastDetails;
