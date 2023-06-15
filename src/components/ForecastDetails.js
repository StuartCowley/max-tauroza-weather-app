import React from "react";

const ForecastDetails = ({ detailedForecast }) => {
  const { date, humidity, temperature, wind } = detailedForecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <h1 className="forecast-details_date">{formattedDate}</h1>
      <div className="forecast-details_maximum_temperature">
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details_minimum_temperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details_humidity">Humidity: {humidity}</div>
      <div className="forecast-details_wind">
        Wind: {wind.speed + wind.direction}
      </div>
    </div>
  );
};

export default ForecastDetails;
