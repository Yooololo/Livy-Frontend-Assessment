import Landing from "../Components/Landing";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("Landing", () => {
  it("renders with redux", () => {
    renderWithRedux(<Landing />);
  });

  it("finds specific text", () => {
    const elementLanding = renderWithRedux(<Landing />);
    expect(
      elementLanding.getByText("Welcome to Brastlewark")
    ).toBeInTheDocument();
  });

  it("finds specific text", () => {
    const elementLanding = renderWithRedux(<Landing />);
    const button = elementLanding.container.querySelector("button");
    expect(button.textContent === "Enter City's Gnome Census").toBeTruthy();
  });
});
