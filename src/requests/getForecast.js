import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (!searchText) {
    endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  }
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios.get(endpoint).then((res) => {
    setSelectedDate(res.data.forecasts[0].date);
    setForecasts(res.data.forecasts);
    setLocation(res.data.location);
  });
};

export default getForecast;
