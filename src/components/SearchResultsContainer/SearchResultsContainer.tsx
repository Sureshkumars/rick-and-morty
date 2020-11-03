import React, { useState, useEffect } from "react";
import { Flex, VStack, Box, Grid, Text, Button } from "@chakra-ui/core";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { SkeletonLoader } from "../SkeletonLoader/SkeletonLoader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { NO_RESULTS_TEXT, ERROR_MESSAGE } from "../../constants/constants";
import { Link } from "react-router-dom";
import useCharactersFetchService from "../../hooks/useCharactersFetchService";
import useDebounce from "../../hooks/useDebounce";
import Paginate from "../Paginate/Paginate";

interface IProps {
  searchTerm: string;
  showAll: boolean;
  onResetSearch: () => void;
}
export const SearchResultsContainer: React.FC<IProps> = (props: IProps) => {
  const [page, setpageNumber] = useState(1);

  //Custom character fetch service hook with debounce limit of 500ms
  //Math.Ceil Calculation will change its value once in every four pages as per our usecase for fetiching API in our custom hook.
  const searchResults = useCharactersFetchService(
    useDebounce(props.searchTerm),
    Math.ceil(page / 4),
    props.showAll
  );

  //Reset Page Number when search term changes
  useEffect(() => {
    setpageNumber(1);
  }, [props.searchTerm]);

  return (
    <Box>
      {/* Loader State*/}
      {searchResults.status === "loading" && props.showAll && (
        <SkeletonLoader />
      )}
      {/* Returns No results when search results are empty */}
      {searchResults.status === "loaded" &&
        searchResults.payload.totalCount === 0 && (
          <ErrorMessage message={NO_RESULTS_TEXT} showHomeCTA={false} />
        )}
      {/* Loads the Search Results */}
      {searchResults.status === "loaded" &&
        searchResults.payload.totalCount > 0 && (
          <VStack spacing={8}>
            <Grid>
              <Text fontSize="lg">
                Found {searchResults.payload.totalCount} characters,
              </Text>
              <Button
                colorScheme="teal"
                variant="ghost"
                onClick={props.onResetSearch}
              >
                Reset Search
              </Button>
            </Grid>
            <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
              {/* As we wanted to show five results only per page and API service doesn't have option for fetching based on count. So slicing the data based on the total default value which is 20 per page from the API */}
              {searchResults.payload.characters
                .slice(((page - 1) * 5) % 20, (((page - 1) * 5) % 20) + 5)
                .map((character: any, i) => (
                  <Link
                    to={`/character/${character.characterId}`}
                    title={character.name}
                    key={i}
                  >
                    <CharacterCard character={character} />
                  </Link>
                ))}
            </Flex>
            {/* Math.ceil calculation is for transforming the total pages returned from API service results to our state data */}
            <Paginate
              currentPage={page}
              pageCount={Math.ceil(searchResults.payload.totalCount / 5)}
              onPageClick={(page) => {
                setpageNumber(page);
                window.scrollTo(0, 0);
              }}
            />
          </VStack>
        )}
      {searchResults.status === "error" && (
        <ErrorMessage message={ERROR_MESSAGE} showHomeCTA={true} />
      )}
    </Box>
  );
};
