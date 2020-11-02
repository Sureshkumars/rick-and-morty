import React from "react";
import { Text, Image, Box } from "@chakra-ui/core";

export const NoResults: React.FC = () => {
  return (
    <Box alignItems="Center" textAlign="center">
      <Image
        src="/no-results.gif"
        alt="No Results Found"
        marginTop="5"
        marginBottom="5"
        maxW="280px"
        fallbackSrc="/character-fallback.jpeg"
      />
      <Text fontSize="xl">Sorry, No Results Found</Text>
    </Box>
  );
};
