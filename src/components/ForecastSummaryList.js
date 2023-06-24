import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaryList.css";

const ForecastSummaryList = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summary-list">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          forecast={forecast}
          onSelect={onForecastSelect}
        />
      ))}
    </div>
  );
};

export default ForecastSummaryList;
