import React from "react";
import { Box, Grid } from "@chakra-ui/core";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { CharacterDetailPage } from "./components/CharacterDetailPage/CharacterDetailPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PAGE_NOT_FOUND } from "./constants/constants";

function App() {
  return (
    <Router>
      <Box fontSize="xl">
        <Grid p={3}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/character/:characterId">
              <CharacterDetailPage />
            </Route>
            <Route exact path="*">
              <ErrorMessage message={PAGE_NOT_FOUND} showHomeCTA={true} />{" "}
            </Route>
          </Switch>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
