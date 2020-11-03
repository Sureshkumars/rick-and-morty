import React from "react";
import { SearchResultsContainer } from "./SearchResultsContainer";
import { render } from "@testing-library/react";
import * as hooks from "../../hooks/useCharactersFetchService";
import { MemoryRouter, Route } from "react-router-dom";

describe("SearchResultsContainer", () => {
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

  it("matches snapshot", () => {
    jest.spyOn(hooks, "default").mockImplementation(() => ({
      status: "loaded",
      payload: {
        totalCount: 2,
        totalPages: 1,
        characters: [
          {
            name: "Rick",
            imageUrl: "/images/character-fallback.jpeg",
            species: "Alien",
            lastLocation: "Earth",
            totalEpisodes: 22,
            characterId: 1,
          },
          {
            name: "Morty",
            imageUrl: "/images/character-fallback.jpeg",
            species: "Human",
            lastLocation: "Earth Dimension 1",
            totalEpisodes: 10,
            characterId: 3,
          },
        ],
      },
    }));

    const { asFragment }: any = render(
      <MemoryRouter>
        <Route>
          <SearchResultsContainer
            searchTerm="Rick"
            showAll={true}
            onResetSearch={() => {
              //Search Reset will be triggered.
            }}
          />
        </Route>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
