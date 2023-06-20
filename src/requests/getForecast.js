/* eslint-disable no-console */
import axios from "axios";

const getForecast = async (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  await axios
    .get(endpoint)
    .then((res) => {
      setErrorMessage("");
      setSelectedDate(res.data.forecasts[0].date);
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
    })
    .catch((error) => {
      if (error.response.status === 404) {
        console.error("Invalid location", error);
        setErrorMessage("Please enter a valid town or city");
      }
      if (error.response.status === 500) {
        console.error("Server error", error);
        setErrorMessage("Please try again later");
      }
    });
};

export default getForecast;
