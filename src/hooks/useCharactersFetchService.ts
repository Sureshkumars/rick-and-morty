import { useEffect, useState } from "react";
import { CharacterSearchResults } from "../types/character";
import { Service } from "../types/service";
import { CHARACTER_API_ENDPOINT } from "../constants/constants";

const characterApiEndPoint = CHARACTER_API_ENDPOINT;

const useCharactersFetchService = (
  searchTerm: string,
  page?: number,
  showAll: boolean = false
) => {
  //set the initial state
  const [result, setResult] = useState<Service<CharacterSearchResults>>({
    status: "loading",
  });
  useEffect(() => {
    //When user visits for first time, fetch service won't get called as per our usecase

    if (!searchTerm && !showAll) {
      return;
    }

    //Toggles between searching for all characters or filter based on input search term
    let url =
      searchTerm === ""
        ? `${characterApiEndPoint}/?page=${page}`
        : `${characterApiEndPoint}/?name=${searchTerm}&page=${page}`;
    // Define asynchronous function
    const fetchCharactersApi = async () => {
      try {
        // Fetch data from REST API
        const response = await (await fetch(url)).json();
        //When no characters found API sends response with error key
        if (response.error) {
          setResult({
            status: "loaded",
            payload: {
              totalCount: 0,
              totalPages: 0,
              characters: [],
            },
          });
        } else {
          //Process the response data to according to our defined character types
          setResult({
            status: "loaded",
            payload: {
              totalCount: response.info.count,
              totalPages: response.info.pages,
              characters: response.results.map((data: any) => {
                return {
                  name: data.name,
                  imageUrl: data.image,
                  lastLocation: data.location.name,
                  totalEpisodes: data.episode.length,
                  characterId: data.id,
                  species: data.species,
                };
              }),
            },
          });
        }
      } catch (error) {
        //Catches error and update the return value
        setResult({ status: "error", error });
      }
    };

    // Call async function
    fetchCharactersApi();
  }, [searchTerm, page, showAll]);
  return result;
};

export default useCharactersFetchService;
