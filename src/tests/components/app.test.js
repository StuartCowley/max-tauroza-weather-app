import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/app";
import forecast from "../../data/forecast.json";

test("renders Weather App title", () => {
  render(<App location={forecast.location} forecasts={forecast.forecasts} />);
  const title = screen.getByText(/Weather App/i);
  expect(title).toBeInTheDocument();
});
