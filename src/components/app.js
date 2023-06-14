import React from "react";
import "../styles/app.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaryList from "./ForecastSummaryList";

const App = ({ location, forecasts }) => {
  const { city, country } = location;

  return (
    <div className="App">
      <h1 className="title">Weather App</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummaryList
        className="forecast-summary-list"
        forecasts={forecasts}
      />
    </div>
  );
};

export default App;
