import React from "react";

const ForecastSummary = ({ forecast }) => {
  //   const { date, description, icon, temperature } = forecast;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">
        {forecast ? forecast.date : null}
      </div>
      <div className="forecast-summary_icon">
        {forecast ? forecast.icon : null}
      </div>
      <div className="forecast-summary_temperature">
        {forecast ? forecast.temperature.max : null}&deg;C
      </div>
      <div className="forecast-summary_description">
        {forecast ? forecast.description : null}
      </div>
    </div>
  );
};

export default ForecastSummary;
