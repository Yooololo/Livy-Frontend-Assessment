import Gnomes from "../Components/Gnomes";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("Gnomes", () => {
  it("renders with redux", () => {
    renderWithRedux(<Gnomes />);
  });

  it("finds specific div", () => {
    const elementGnomes = renderWithRedux(<Gnomes />);
    const h1 = elementGnomes.container.querySelector("h1");
    expect(h1.outerHTML.includes("gnomesname")).toBeTruthy();
  });
});
