import React from "react";
import "../styles/ForecastSummary.css";
import iconData from "../data/iconData.json";

const ForecastSummary = ({ forecast, onSelect }) => {
  const { date, description, icon, temperature } = forecast;
  const iconString = icon.toString();
  const formattedDate = new Date(date).toDateString();
  let weatherCode;

  if (icon > 800) {
    weatherCode = iconString;
  }
  if (icon <= 800) weatherCode = `${iconString.slice(0, 1)}00`;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary_date">{formattedDate}</div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        <img
          src={iconData[weatherCode]}
          alt={`Icon for ${description} weather`}
        />
      </div>
      <div className="forecast-summary_temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary_description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
};

export default ForecastSummary;
