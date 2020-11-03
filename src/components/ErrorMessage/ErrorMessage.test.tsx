import React from "react";
import { ErrorMessage } from "./ErrorMessage";
import { render } from "@testing-library/react";

it("ErrorPage snapshot", () => {
  const error = {
    message: "No Results Found",
    showHomeCTA: true,
  };
  const { asFragment }: any = render(<ErrorMessage {...error} />);
  expect(asFragment()).toMatchSnapshot();
});
