import React from "react";
import { Text, VStack, Image, Box, Link, Button } from "@chakra-ui/core";
interface IProps {
  message: string;
  showHomeCTA: boolean;
}
export const ErrorMessage: React.FC<IProps> = (props: IProps) => {
  return (
    <VStack spacing={8} marginTop="10">
      <Box alignItems="Center" textAlign="center">
        <Image
          src="/images/no-results.gif"
          alt="Error Occurred"
          marginTop="5"
          marginBottom="5"
          maxW="280px"
          fallbackSrc="/images/character-fallback.jpeg"
        />
        <Text marginBottom="5" fontSize="xl">
          {props.message}
        </Text>
        {props.showHomeCTA && (
          <Link href="/" title="Return Home">
            <Button colorScheme="teal" variant="outline">
              Return Home
            </Button>
          </Link>
        )}
      </Box>
    </VStack>
  );
};
