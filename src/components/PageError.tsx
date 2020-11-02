import React from "react";
import { Text, Image, Box, Link, Button } from "@chakra-ui/core";

export const PageError: React.FC = () => {
  return (
    <Box alignItems="Center" textAlign="center">
      <Image
        src="/no-results.gif"
        alt="Error Occurred"
        marginTop="5"
        marginBottom="5"
        maxW="280px"
        fallbackSrc="/character-fallback.jpeg"
      />
      <Text marginBottom="5" fontSize="xl">
        Sorry, Some Error has occurred.
      </Text>
      <Link href="/" title="Return Home">
        <Button colorScheme="teal" variant="outline">
          Return Home
        </Button>
      </Link>
    </Box>
  );
};
