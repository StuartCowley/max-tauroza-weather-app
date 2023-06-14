import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummary forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Forecast Summary values", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };
  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary forecast={validProps} />
    );

    expect(getByText("1111111")).toHaveAttribute(
      "class",
      "forecast-summary_date"
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary_description"
    );
    expect(getByTestId("forecast-icon")).toHaveAttribute(
      "class",
      "forecast-summary_icon"
    );
    expect(getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary_temperature"
    );
  });
});
