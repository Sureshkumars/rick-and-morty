import { useEffect, useState } from "react";
import { CharacterDetails } from "../types/characterDetail";
import { Service } from "../types/service";
import { CHARACTER_API_ENDPOINT } from "../constants/constants";
const characterApiEndPoint = CHARACTER_API_ENDPOINT;

const useCharacterDetailService = (characterId: string) => {
  //set the initial state
  const [result, setResult] = useState<Service<CharacterDetails>>({
    status: "loading",
  });
  useEffect(() => {
    const url = `${characterApiEndPoint}/${characterId}`;
    //API function to get the character details
    const fetchCharacterDetailsApi = async () => {
      try {
        // Fetch data from REST API
        const characterResponse = await (await fetch(url)).json();
        //Set the status to error in case of failure
        if (characterResponse.error) {
          setResult({
            status: "error",
            error: {
              name: "character-detail-error",
              message: "Unable to fetch character details",
            },
          });
        } else {
          //Reduce the episode array to single endpioint url with multiple episodes id in slug to get all the episdode details
          const epiSodeUrl: string = characterResponse.episode.reduce(
            (acc: string, url: string) => {
              return `${acc},${url.split(/[\s/]+/).pop()}`;
            }
          );
          //Handle the Episode API call based on the total episodes of the character
          const episodeResponse =
            characterResponse.episode.length !== 0
              ? await (await fetch(epiSodeUrl)).json()
              : [];
          if (episodeResponse.error) {
            setResult({
              status: "error",
              error: {
                name: "episode-detail-error",
                message: "Unable to fetch episode details",
              },
            });
          } else {
            //Handling for Single Episode response as it is returned as object
            const episodeDetails =
              characterResponse.episode.length === 1
                ? [
                    {
                      name: episodeResponse.name,
                      airedDate: episodeResponse.air_date,
                      season: episodeResponse.episode,
                    },
                  ]
                : episodeResponse.map((data: any) => {
                    return {
                      name: data.name,
                      airedDate: data.air_date,
                      season: data.episode,
                    };
                  });
            //Process the response data
            setResult({
              status: "loaded",
              payload: {
                name: characterResponse.name,
                imageUrl: characterResponse.image,
                lastLocation: characterResponse.location.name,
                totalEpisodes: characterResponse.episode.length,
                characterId: characterResponse.id,
                species: characterResponse.species,
                status: characterResponse.status,
                type: characterResponse.type,
                gender: characterResponse.gender,
                origin: characterResponse.origin.name,
                episode: episodeDetails,
                createdAt: characterResponse.created,
              },
            });
          }
        }
      } catch (error) {
        //Update the state to error
        setResult({ status: "error", error });
      }
    };

    // Call async function
    fetchCharacterDetailsApi();
  }, []);
  return result;
};

export default useCharacterDetailService;
