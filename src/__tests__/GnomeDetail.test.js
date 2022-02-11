import GnomeDetail from "../Components/GnomeDetail";
import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderWithRedux from "../testUtility";

const gnomeBlueprint = {
  allGnomes: [
    {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
      ],
      friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
    },
  ],
};

afterEach(cleanup);

describe("GnomeDetail", () => {
  it("renders with redux", () => {
    renderWithRedux(<GnomeDetail />);
  });

  it("finds specific text", () => {
    const elementGnomeDetail = renderWithRedux(<GnomeDetail />);
    expect(elementGnomeDetail.getByText("Home")).toBeInTheDocument();
  });
});
