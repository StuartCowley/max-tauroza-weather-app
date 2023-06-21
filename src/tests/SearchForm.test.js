import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText=""
        setSearchText={jest.fn()}
        onSubmit={jest.fn()}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("has a search button", () => {
    const { getByRole } = render(
      <SearchForm
        searchText=""
        setSearchText={jest.fn()}
        onSubmit={jest.fn()}
      />
    );

    expect(getByRole("button")).toBeInTheDocument();
  });
});
