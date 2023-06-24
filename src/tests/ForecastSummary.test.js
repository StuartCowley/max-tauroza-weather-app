import React from "react";
import { fireEvent, render } from "@testing-library/react";
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
    onSelect: jest.fn(),
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary forecast={validProps} onSelect={validProps.onSelect} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary forecast={validProps} onSelect={validProps.onSelect} />
    );

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-summary_date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary_description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary_icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary_temperature");
  });

  it("renders a button that triggers a function when clicked", () => {
    const { getByRole } = render(
      <ForecastSummary forecast={validProps} onSelect={validProps.onSelect} />
    );
    fireEvent.click(getByRole("button"));

    expect(validProps.onSelect).toHaveBeenCalled();
    expect(getByRole("button")).toBeInTheDocument();
  });
});
