import reducer from "../Reducer/reducer";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("reducer", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(reducer(undefined, "")).toEqual({
      allGnomes: [],
      gnomes: [],
      filteredGnomes: [],
    });
  });

  //-------------------------SEARCH_GNOME_NAME---------------------------------
  it("Deberia buscar gnomos y filtrar por name", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [{ name: "AAA" }, { name: "AAB" }, { name: "ABA" }],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "SEARCH_GNOME_NAME", payload: "AAB" }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [{ name: "AAA" }, { name: "AAB" }, { name: "ABA" }],
      },
      gnomes: [{ name: "AAB" }],
      filteredGnomes: [{ name: "AAB" }],
    });
  });

  it("Deberia buscar gnomos y filtrar por fragmento de name", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [{ name: "AAA" }, { name: "AAB" }, { name: "ABA" }],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "SEARCH_GNOME_NAME", payload: "AB" }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [{ name: "AAA" }, { name: "AAB" }, { name: "ABA" }],
      },
      gnomes: [{ name: "AAB" }, { name: "ABA" }],
      filteredGnomes: [{ name: "AAB" }, { name: "ABA" }],
    });
  });

  //-------------------------SEARCH_GNOME_ID---------------------------------

  it("Deberia buscar gnomos y filtrar por id", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [{ id: 0 }, { id: 1 }, { id: 2 }],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "SEARCH_GNOME_ID", payload: 2 }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [{ id: 0 }, { id: 1 }, { id: 2 }],
      },
      gnomes: [{ id: 2 }],
      filteredGnomes: [{ id: 2 }],
    });
  });

  //-------------------------FILTER_GNOMES_BY_PROFESSION---------------------------------

  it("Deberia buscar gnomos y filtrar por professions", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [
              { id: 0, professions: "Tailor" },
              { id: 1, professions: "Metalworker" },
              { id: 2, professions: "Tailor" },
            ],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "FILTER_GNOMES_BY_PROFESSION", payload: "Tailor" }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [
          { id: 0, professions: "Tailor" },
          { id: 1, professions: "Metalworker" },
          { id: 2, professions: "Tailor" },
        ],
      },
      gnomes: [
        { id: 0, professions: "Tailor" },
        { id: 2, professions: "Tailor" },
      ],
      filteredGnomes: [
        { id: 0, professions: "Tailor" },
        { id: 2, professions: "Tailor" },
      ],
    });
  });

  it("Deberia buscar gnomos y filtrar por professions y devolver todos para All", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [
              { id: 0, professions: "Tailor" },
              { id: 1, professions: "Metalworker" },
              { id: 2, professions: "Tailor" },
            ],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "FILTER_GNOMES_BY_PROFESSION", payload: "All" }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [
          { id: 0, professions: "Tailor" },
          { id: 1, professions: "Metalworker" },
          { id: 2, professions: "Tailor" },
        ],
      },
      gnomes: [
        { id: 0, professions: "Tailor" },
        { id: 1, professions: "Metalworker" },
        { id: 2, professions: "Tailor" },
      ],
      filteredGnomes: [
        { id: 0, professions: "Tailor" },
        { id: 1, professions: "Metalworker" },
        { id: 2, professions: "Tailor" },
      ],
    });
  });

  //-------------------------FILTER_GNOMES_BY_AGE---------------------------------

  it("Deberia buscar gnomos y filtrar por age (1 resultado)", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [
              { id: 0, age: 253 },
              { id: 1, age: 115 },
              { id: 2, age: 95 },
            ],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "FILTER_GNOMES_BY_AGE", payload: [0, 100] }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [
          { id: 0, age: 253 },
          { id: 1, age: 115 },
          { id: 2, age: 95 },
        ],
      },
      gnomes: [{ id: 2, age: 95 }],
      filteredGnomes: [{ id: 2, age: 95 }],
    });
  });

  it("Deberia buscar gnomos y filtrar por age y ordenar de menor a mayor", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [
              { id: 0, age: 253 },
              { id: 1, age: 115 },
              { id: 2, age: 95 },
            ],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "FILTER_GNOMES_BY_AGE", payload: [110, 300] }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [
          { id: 0, age: 253 },
          { id: 1, age: 115 },
          { id: 2, age: 95 },
        ],
      },
      gnomes: [
        { id: 1, age: 115 },
        { id: 0, age: 253 },
      ],
      filteredGnomes: [
        { id: 1, age: 115 },
        { id: 0, age: 253 },
      ],
    });
  });

  //-------------------------FILTER_GNOMES_BY_HEIGHT---------------------------------

  it("Deberia buscar gnomos y filtrar por height y ordenar de menor a mayor", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [
              { id: 0, height: 90 },
              { id: 1, height: 55 },
              { id: 2, height: 101 },
            ],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "FILTER_GNOMES_BY_HEIGHT", payload: [0, 100] }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [
          { id: 0, height: 90 },
          { id: 1, height: 55 },
          { id: 2, height: 101 },
        ],
      },
      gnomes: [
        { id: 1, height: 55 },
        { id: 0, height: 90 },
      ],
      filteredGnomes: [
        { id: 1, height: 55 },
        { id: 0, height: 90 },
      ],
    });
  });

  //-------------------------FILTER_GNOMES_BY_WEIGHT---------------------------------

  it("Deberia buscar gnomos y filtrar por weight y ordenar de menor a mayor", () => {
    expect(
      reducer(
        {
          allGnomes: {
            Brastlewark: [
              { id: 0, weight: 90 },
              { id: 1, weight: 55 },
              { id: 2, weight: 101 },
            ],
          },
          gnomes: [],
          filteredGnomes: [],
        },
        { type: "FILTER_GNOMES_BY_WEIGHT", payload: [0, 100] }
      )
    ).toEqual({
      allGnomes: {
        Brastlewark: [
          { id: 0, weight: 90 },
          { id: 1, weight: 55 },
          { id: 2, weight: 101 },
        ],
      },
      gnomes: [
        { id: 1, weight: 55 },
        { id: 0, weight: 90 },
      ],
      filteredGnomes: [
        { id: 1, weight: 55 },
        { id: 0, weight: 90 },
      ],
    });
  });
});
