import useCharacterDetailsService from "./useCharacterDetailsService";
import { renderHook } from "@testing-library/react-hooks";
import {
  SUCCESS_EPISODES_API_RESPONSE,
  CHARACTER_API_RESPONSE,
  CHARACTER_API_URL,
  SUCCESS_CHARACTER_DETAILS_HOOK_RESPONSE,
} from "../utils/testDataConstants";
describe("useCharacterDetailsService", () => {
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

  it("Success response check for the Custom character details hook", async () => {
    // @ts-ignore
    global.fetch = jest.fn((url) => {
      if (url === CHARACTER_API_URL) {
        return Promise.resolve({
          json: () => Promise.resolve(CHARACTER_API_RESPONSE),
        });
      }

      return Promise.resolve({
        json: () => Promise.resolve(SUCCESS_EPISODES_API_RESPONSE),
      });
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useCharacterDetailsService("1")
    );

    await waitForNextUpdate();

    expect(result.current).toEqual(SUCCESS_CHARACTER_DETAILS_HOOK_RESPONSE);
  });
});
