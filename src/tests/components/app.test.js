import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import App from "../../components/app";

describe("App", () => {
  it("renders app components correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("getForecast method", () => {
  it("gets correct data in response", async () => {
    const mockedData = {
      location: {
        city: "Test city",
        country: "Test country",
      },
      forecasts: [
        {
          date: 111111,
          temperature: { max: 2, min: 1 },
          wind: { speed: 1, direction: "test direction" },
          humidity: 1,
          description: "Test description",
          icon: 1,
        },
        // {
        //   date: 222222,
        //   temperature: { max: 3, min: 2 },
        //   wind: { speed: 2, direction: "test direction 2" },
        //   humidity: 2,
        //   description: "Test description 2",
        //   icon: 2,
        // },
      ],
    };

    jest.spyOn(axios, "get").mockResolvedValue(mockedData);
    render(<App />);

    expect(await screen.findByText("test direction")).toBeInTheDocument();
  });
});
