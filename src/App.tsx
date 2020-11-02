import React from "react";
import { Box, Grid } from "@chakra-ui/core";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { PageNotFound } from "./components/PageNotFound";
import { CharacterDetailPage } from "./components/CharacterDetailPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
              <PageNotFound />
            </Route>
          </Switch>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
