import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaryList from "../../components/ForecastSummaryList";

describe("Forecast Summary List", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description",
      icon: 800,
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 1111112,
      description: "Stub description",
      icon: 602,
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 1111113,
      description: "Stub description",
      icon: 711,
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 1111114,
      description: "Stub description",
      icon: 615,
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 1111115,
      description: "Stub description",
      icon: 501,
      temperature: {
        min: 12,
        max: 22,
      },
    },
  ];
  it("renders list correctly", () => {
    const { asFragment } = render(
      <ForecastSummaryList forecasts={validProps} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct number of Forecast Summary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaryList forecasts={validProps} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(5);
  });
});
