import React from "react";
import { CharacterCard } from "./CharacterCard";
import { render } from "@testing-library/react";

const character = {
  name: "Rick",
  imageUrl: "/images/character-fallback.jpeg",
  species: "Human",
  lastLocation: "Earth",
  totalEpisodes: 20,
  characterId: 1,
};

it("Check for Character Card snapshot", () => {
  const { asFragment }: any = render(<CharacterCard character={character} />);
  expect(asFragment()).toMatchSnapshot();
});
