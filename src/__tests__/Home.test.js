import Home from "../Components/Home";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("Home", () => {
  it("renders with redux", () => {
    renderWithRedux(<Home />);
  });

  it("finds specific placerholder", () => {
    const elementHome = renderWithRedux(<Home />);
    expect(
      elementHome.getByPlaceholderText("Search Gnome by Name")
    ).toBeInTheDocument();
  });

  it("finds specific text", () => {
    const elementHome = renderWithRedux(<Home />);
    expect(elementHome.getByText("Filter by Profession")).toBeInTheDocument();
  });

  it("renders pagination", () => {
    const elementHome = renderWithRedux(<Home />);
    const li = elementHome.container.querySelector("li");
    expect(li.textContent === "1").toBeTruthy();
  });
});
