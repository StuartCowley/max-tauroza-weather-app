import React from "react";
import { render /*screen, waitFor*/ } from "@testing-library/react";
// import axios from "axios";
import App from "../../components/app";

describe("App", () => {
  it("renders app components correctly", async () => {
    // const mockedData = {
    //   location: {
    //     city: "Test city",
    //     country: "Test country",
    //   },
    //   forecasts: [
    //     {
    //       date: 111111,
    //       temperature: { max: 2, min: 1 },
    //       wind: { speed: 1, direction: "test direction" },
    //       humidity: 1,
    //       description: "Test description",
    //       icon: 1,
    //     },
    //   ],
    // };

    // jest.spyOn(axios, "get").mockResolvedValue({ mockedData });
    // const { asFragment } = render(<App />);

    // expect(
    //   await screen.findByText(/Test city, Test country/i)
    // ).toBeInTheDocument();
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
