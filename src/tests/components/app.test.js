import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/app";

describe("App", () => {
  it("renders app components correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
