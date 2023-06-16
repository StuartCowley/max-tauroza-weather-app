import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/app";
import forecast from "../../data/forecast.json";

describe("renders all app components correctly", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description",
      icon: "800",
      temperature: {
        min: 12,
        max: 22,
      },
      wind: {
        speed: 13,
        direction: "Stub direction",
      },
      humidity: 30,
    },
    {
      date: 1111112,
      description: "Stub description",
      icon: "602",
      temperature: {
        min: 12,
        max: 22,
      },
      wind: {
        speed: 27,
        direction: "Stub direction",
      },
      humidity: 7,
    },
  ];

  const { asFragment } = render(
    <App
      location={forecast.location}
      forecasts={validProps}
      forecast={validProps[0]}
    />
  );

  expect(asFragment()).toMatchSnapshot();

  test("renders App component correctly", () => {
    const h1Element = screen.getByText(/Manchester, Uk/i);

    expect(h1Element).toBeInTheDocument();
  });
});
