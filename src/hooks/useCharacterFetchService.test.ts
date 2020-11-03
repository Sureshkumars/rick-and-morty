import useCharactersFetchService from "./useCharactersFetchService";
import { renderHook } from "@testing-library/react-hooks";
import {
  CHARACTER_SEARCH_HOOK_RESPONSE,
  CHARACTER_SEARCH_API_RESPONSE,
  SEARCH_TERM,
  SEARCH_HOOK_URL,
} from "../utils/testDataConstants";

describe("useCharactersFetchService", () => {
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

  it("Success response check for the Custom character filter hook", async () => {
    // @ts-ignore
    global.fetch = jest.fn((url) => {
      if (url === SEARCH_HOOK_URL) {
        return Promise.resolve({
          json: () => Promise.resolve(CHARACTER_SEARCH_API_RESPONSE),
        });
      }
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useCharactersFetchService(SEARCH_TERM, 1, true)
    );

    await waitForNextUpdate();

    expect(result.current).toEqual(CHARACTER_SEARCH_HOOK_RESPONSE);
  });
});
