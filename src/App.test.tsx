import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  const { getByLabelText } = render(<App />);
  const searchInput = getByLabelText("search-input");
  expect(searchInput).toBeInTheDocument();
});
