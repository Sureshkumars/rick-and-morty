import React from "react";
import Paginate from "./Paginate";
import { render } from "@testing-library/react";

it("Paginate matches snapshot", () => {
  let currentPage: number = 1;
  const { asFragment }: any = render(
    <Paginate
      currentPage={currentPage}
      pageCount={10}
      onPageClick={(pageValue) => {
        //Clicked Page Value
        currentPage = pageValue;
      }}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
