import React from "react";
import { CharacterDetailPage } from "./CharacterDetailPage";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import * as hooks from "../../hooks/useCharacterDetailsService";

describe("CharacterDetailPage", () => {
  // Mocking methods which are not implemented in JSDOM
  // https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  it("Sucessfull Character Details Page Fetch snapshot", () => {
    jest.spyOn(hooks, "default").mockImplementation(() => ({
      status: "loaded",
      payload: {
        name: "Rick Sanchez",
        imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        lastLocation: "Earth (Replacement Dimension)",
        totalEpisodes: 2,
        characterId: 1,
        species: "Human",
        status: "Alive",
        type: "",
        gender: "Male",
        origin: "Earth (C-137)",
        episode: [
          {
            airedDate: "December 9, 2013",
            name: "Sample Episode",
            season: "S01E02",
          },
          {
            airedDate: "December 9, 2013",
            name: "Lawnmower Dog",
            season: "S01E02",
          },
        ],
        createdAt: "2017-11-04T18:48:46.250Z",
      },
    }));

    const { asFragment }: any = render(
      <MemoryRouter initialEntries={["/1"]}>
        <Route exact path="/:characterId">
          <CharacterDetailPage />
        </Route>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
