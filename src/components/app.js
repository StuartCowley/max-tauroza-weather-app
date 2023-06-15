import React from "react";
import "../styles/app.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaryList from "./ForecastSummaryList";
import ForecastDetails from "./ForecastDetails";

const App = ({ location, forecasts, detailedForecast }) => {
  const { city, country } = location;

  return (
    <div className="weather-app">
      <LocationDetails
        className="location-details"
        city={city}
        country={country}
      />
      <ForecastSummaryList
        className="forecast-summary-list"
        forecasts={forecasts}
      />
      <ForecastDetails
        className="forecast-details"
        detailedForecast={detailedForecast}
      />
    </div>
  );
};

export default App;
