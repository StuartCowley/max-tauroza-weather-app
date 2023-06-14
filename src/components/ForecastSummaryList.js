import React from "react";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaryList = ({ forecasts }) => {
  return (
    <div className="forecast-summary-list">
      {forecasts
        ? forecasts.map((forecast) => (
            <ForecastSummary key={forecast.date} forecast={forecast} />
          ))
        : null}
    </div>
  );
};

export default ForecastSummaryList;
