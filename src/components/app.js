import React, { useEffect, useState } from "react";
import "../styles/app.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaryList from "./ForecastSummaryList";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";

const App = () => {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getForecast("Manchester", setSelectedDate, setForecasts, setLocation);
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <ForecastSummaryList
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
