import About from "../Components/About";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("About", () => {
  it("renders with redux", () => {
    renderWithRedux(<About />);
  });

  it("finds specific text", () => {
    const elementAbout = renderWithRedux(<About />);
    expect(
      elementAbout.getByText(
        "https://github.com/Yooololo/Livy-Frontend-Assessment"
      )
    ).toBeInTheDocument();
  });
});
