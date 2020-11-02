import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/core";

export const SkeletonLoader: React.FC = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white" minWidth="300px">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
};
