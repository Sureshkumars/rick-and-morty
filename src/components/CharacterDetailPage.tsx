import React from "react";
import {
  Box,
  VStack,
  Image,
  Heading,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  useToast,
  Divider,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/core";
import { PageError } from "./PageError";
import { SkeletonLoader } from "./SkeletonLoader";
import useCharacterDetailService from "../hooks/useCharacterDetailsService";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
interface IParams {
  characterId: string;
}
export const CharacterDetailPage: React.FC = () => {
  const { characterId }: IParams = useParams();
  const toast = useToast();
  //get character details
  const characterDetails = useCharacterDetailService(characterId);
  return (
    <Box>
      {characterDetails.status === "loading" && <SkeletonLoader />}

      {characterDetails.status === "loaded" && (
        <VStack spacing={8} marginTop="10">
          <Image
            src={characterDetails.payload.imageUrl}
            alt={characterDetails.payload.name}
            boxSize="200px"
            fallbackSrc="/character-fallback.jpeg"
          />
          <Box>
            <Heading mb={4}>{characterDetails.payload.name}</Heading>
            <Box marginTop="1.25rem" padding="1rem" borderWidth="2px">
              <Stat>
                <StatLabel>species</StatLabel>
                <StatNumber>{characterDetails.payload.species}</StatNumber>
              </Stat>
            </Box>
            <Box marginTop="1.25rem" padding="1rem" borderWidth="2px">
              <Stat>
                <StatLabel>Gender</StatLabel>
                <StatNumber>{characterDetails.payload.gender}</StatNumber>
              </Stat>
            </Box>
            <Box marginTop="1.25rem" padding="1rem" borderWidth="2px">
              <Stat>
                <StatLabel>Origin Location</StatLabel>
                <StatNumber>{characterDetails.payload.origin}</StatNumber>
              </Stat>
            </Box>
            <Box marginTop="1.25rem" padding="1rem" borderWidth="2px">
              <Stat>
                <StatLabel>Last Known Location</StatLabel>
                <StatNumber>{characterDetails.payload.lastLocation}</StatNumber>
              </Stat>
            </Box>
            <Box marginTop="1.25rem" padding="1rem" borderWidth="2px">
              <Stat>
                <StatLabel>Total Episodes</StatLabel>
                <StatNumber>
                  {characterDetails.payload.totalEpisodes}
                </StatNumber>
              </Stat>
            </Box>
            <Box marginTop="1.25rem" padding="1rem" borderWidth="2px">
              <List spacing={5}>
                <Stat>
                  <StatLabel>Episode Details</StatLabel>
                </Stat>
                {characterDetails.payload.episode.map((data) => {
                  return (
                    <ListItem key={data.name}>
                      <ListIcon
                        as={FaCheckCircle}
                        color="green.500"
                        fontSize="sm"
                      />
                      {data.name} - {data.season} - was aired at{" "}
                      {data.airedDate} <Divider orientation="horizontal" />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Button
              size="lg"
              colorScheme="blue"
              mt="24px"
              marginBottom="10"
              onClick={() =>
                toast({
                  title: "Purchase Successfull.",
                  description: "Merchandise was clicked successfully",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                })
              }
            >
              Buy Merchandise
            </Button>
          </Box>
        </VStack>
      )}
      {characterDetails.status === "error" && <PageError />}
    </Box>
  );
};
