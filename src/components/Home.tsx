import React, { useState } from "react";
import { VStack, Image } from "@chakra-ui/core";
import { SearchBox } from "./SearchBox";
import { SearchResultsContainer } from "./SearchResultsContainer";
export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [defaultPage, setDefaultPage] = useState(1);
  return (
    <VStack spacing={8} marginTop="10">
      <Image
        src="/rick-and-morty.png"
        alt="Rick and Morty"
        justifySelf="center"
        fallbackSrc="/character-fallback.jpeg"
      />
      <SearchBox
        value={searchTerm}
        onChange={(value) => {
          setSearchTerm(value);
          setShowAll(true);
          setDefaultPage(1);
        }}
      />
      <SearchResultsContainer
        searchTerm={searchTerm}
        showAll={showAll}
        page={defaultPage}
        onResetSearch={() => {
          setSearchTerm("");
          setShowAll(true);
          setDefaultPage(1);
        }}
      />
    </VStack>
  );
};
