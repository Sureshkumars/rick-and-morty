import React, { useState } from "react";
import { VStack, Image } from "@chakra-ui/core";
import { SearchBox } from "../SearchBox/SearchBox";
import { SearchResultsContainer } from "../SearchResultsContainer/SearchResultsContainer";
export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  return (
    <VStack spacing={8} marginTop="10">
      <Image
        src="/images/rick-and-morty.png"
        alt="Rick and Morty"
        justifySelf="center"
        fallbackSrc="/images/character-fallback.jpeg"
      />
      <SearchBox
        value={searchTerm}
        onChange={(value) => {
          setSearchTerm(value);
          setShowAll(true);
        }}
      />
      <SearchResultsContainer
        searchTerm={searchTerm}
        showAll={showAll}
        onResetSearch={() => {
          setSearchTerm("");
          setShowAll(true);
        }}
      />
    </VStack>
  );
};
