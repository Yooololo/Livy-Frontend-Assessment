import SearchBar from "../Components/SearchBar";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("SearchBar", () => {
  it("renders with redux", () => {
    renderWithRedux(<SearchBar />);
  });

  it("finds specific placerholder", () => {
    const elementSearchBar = renderWithRedux(<SearchBar />);
    expect(
      elementSearchBar.getByPlaceholderText("Search Gnome by Id")
    ).toBeInTheDocument();
  });

  it("finds specific text", () => {
    const elementSearchBar = renderWithRedux(<SearchBar />);
    expect(elementSearchBar.getByText("Landing")).toBeInTheDocument();
  });

  it("finds specific button", () => {
    const elementSearchBar = renderWithRedux(<SearchBar />);
    const button = elementSearchBar.container.querySelector("button");
    expect(button.outerHTML.includes('type="submit"')).toBeTruthy();
  });
});
