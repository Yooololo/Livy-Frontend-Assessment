import Filters from "../Components/Filters";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("Filters", () => {
  it("renders with redux", () => {
    renderWithRedux(<Filters />);
  });

  it("finds specific placerholder", () => {
    const elementFilters = renderWithRedux(<Filters />);
    expect(elementFilters.getByText("Reload Gnomes")).toBeInTheDocument();
  });

  it("finds specific text", () => {
    const elementFilters = renderWithRedux(<Filters />);
    expect(
      elementFilters.getByText("Filter by Profession")
    ).toBeInTheDocument();
  });
});
