import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";

it("Header matches snapshot", () => {
  const { asFragment }: any = render(
    <MemoryRouter>
      <Route>
        <Header />
      </Route>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
