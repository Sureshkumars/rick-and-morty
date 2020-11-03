import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { SearchBox } from "./SearchBox";

test("Search Input Setup and Value Change Update Check", () => {
  let searchTerm;
  const { getByLabelText } = render(
    <SearchBox
      value={""}
      onChange={(value) => {
        searchTerm = value;
      }}
    />
  );
  const searchInput = getByLabelText("search-input");
  act(() => {
    fireEvent.change(searchInput, {
      target: { value: "Rick" },
    });
  });
  expect(searchTerm).toMatch("Rick");
});
