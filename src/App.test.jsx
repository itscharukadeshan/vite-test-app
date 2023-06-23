/** @format */

// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("Renders hello world", () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    // eslint-disable-next-line no-undef
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello world");
  });
});
