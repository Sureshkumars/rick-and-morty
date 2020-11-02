import React from "react";
import { Grid, IconButton } from "@chakra-ui/core";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Header: React.FC = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={6}
      marginLeft="2"
      marginRight="2"
    >
      <Link to="/" title="Return Home">
        <IconButton aria-label="Home Icon" icon={<FaHome />} />
      </Link>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Grid>
  );
};
