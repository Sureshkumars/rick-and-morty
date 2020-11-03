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
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { SkeletonLoader } from "../SkeletonLoader/SkeletonLoader";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ERROR_MESSAGE } from "../../constants/constants";
import useCharacterDetailService from "../../hooks/useCharacterDetailsService";

interface IParams {
  characterId: string;
}
export const CharacterDetailPage: React.FC = () => {
  const { characterId }: IParams = useParams();
  const toast = useToast();
  //Custom Hook to get character details
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
            fallbackSrc="/images/character-fallback.jpeg"
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
                <StatLabel>Status</StatLabel>
                <StatNumber>{characterDetails.payload.status}</StatNumber>
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
                {characterDetails.payload.episode.map((data, i) => {
                  return (
                    <ListItem key={i}>
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
              aria-label="buy-merchandise"
              size="lg"
              colorScheme="blue"
              mt="24px"
              marginBottom="10"
              onClick={() =>
                toast({
                  title: "Purchase Successfull.",
                  description: "Merchandise was clicked successfully",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                })
              }
            >
              Buy Merchandise
            </Button>
          </Box>
        </VStack>
      )}
      {characterDetails.status === "error" && (
        <ErrorMessage message={ERROR_MESSAGE} showHomeCTA={true} />
      )}
    </Box>
  );
};
