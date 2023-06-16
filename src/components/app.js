import React, { useState } from "react";
import "../styles/app.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaryList from "./ForecastSummaryList";
import ForecastDetails from "./ForecastDetails";

const App = ({ forecasts, location }) => {
  const { city, country } = location;
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaryList
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
};

export default App;
