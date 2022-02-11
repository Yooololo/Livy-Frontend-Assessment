import PagesMobile from "../Components/PagesMobile";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("PagesMobile", () => {
  it("renders with redux", () => {
    renderWithRedux(<PagesMobile />);
  });

  it("finds specific text", () => {
    const elementPagesMobile = renderWithRedux(<PagesMobile />);
    expect(elementPagesMobile.getByText("Prev")).toBeInTheDocument();
  });

  it("finds specific button", () => {
    const elementPagesMobile = renderWithRedux(<PagesMobile />);
    const button = elementPagesMobile.container.querySelectorAll("button")[2];
    expect(
      button.outerHTML.includes("pagesmobileprevnextbuttons")
    ).toBeTruthy();
  });
});
