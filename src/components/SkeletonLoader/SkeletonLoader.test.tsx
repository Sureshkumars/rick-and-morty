import React from "react";
import { SkeletonLoader } from "./SkeletonLoader";
import { render } from "@testing-library/react";

it("Loader Skeleton matches snapshot", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  const { asFragment }: any = render(<SkeletonLoader />);
  expect(asFragment()).toMatchSnapshot();
});
