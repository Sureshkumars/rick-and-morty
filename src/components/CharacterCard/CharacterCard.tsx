import React from "react";
import { Box, Image, Badge } from "@chakra-ui/core";
import { Character } from "../../types/character";

interface IProps {
  character: Character;
}
export const CharacterCard: React.FC<IProps> = ({ character }: IProps) => {
  return (
    <Box
      maxW="280px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin="1rem"
    >
      <Image
        src={character.imageUrl}
        alt={character.name}
        fallbackSrc="/images/character-fallback.jpeg"
      />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {character.species}
          </Badge>
        </Box>
        <Box mt="1" as="h4" lineHeight="tight" isTruncated>
          <strong>{character.name} </strong>
        </Box>
        <Box as="p">
          <strong>Last location - </strong> {character.lastLocation}
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            Totally {character.totalEpisodes} episodes
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
