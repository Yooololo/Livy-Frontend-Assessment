import E404 from "../Components/E404";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

afterEach(cleanup);

describe("E404", () => {
  it("renders with redux", () => {
    renderWithRedux(<E404 />);
  });

  it("finds specific button", () => {
    const elementE404 = renderWithRedux(<E404 />);
    const button = elementE404.getByText("Return Home");
    expect(button).toBeInTheDocument();
  });

  it("finds specific text", () => {
    const elementE404 = renderWithRedux(<E404 />);
    expect(elementE404.getByText("Something went wrong")).toBeInTheDocument();
  });
});
