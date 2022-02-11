import Pages from "../Components/Pages";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("Pages", () => {
  it("renders with redux", () => {
    renderWithRedux(<Pages />);
  });

  it("finds specific text", () => {
    const elementPages = renderWithRedux(<Pages />);
    expect(elementPages.getByText("1")).toBeInTheDocument();
  });

  it("finds specific button", () => {
    const elementPages = renderWithRedux(<Pages />);
    const button = elementPages.container.querySelector("button");
    expect(button.outerHTML.includes("pagesbuttons active")).toBeTruthy();
  });
});
