import React from "react";
import { VStack, Text, Image, Box, Link, Button } from "@chakra-ui/core";

export const PageNotFound: React.FC = () => {
  return (
    <VStack spacing={8}>
      <Box alignItems="Center" textAlign="center">
        <Image
          src="/no-results.gif"
          alt="Page Not Found"
          marginTop="5"
          marginBottom="5"
          maxW="280px"
          fallbackSrc="/character-fallback.jpeg"
        />
        <Text marginBottom="5" fontSize="xl">
          Sorry, the page you are looking for went on a vacation.
        </Text>
        <Link href="/" title="Return Home">
          <Button colorScheme="teal" variant="outline">
            Return Home
          </Button>{" "}
        </Link>{" "}
      </Box>
    </VStack>
  );
};
