import {render, screen} from "@testing-library/react";
import {describe,expect, it } from "vitest"
import App from "./App"

describe("App Component", () => {
  it("should have text hello world", ()=> {
    render(<App />);
    const message = screen.queryByText(/Hello World/i);
    expect(message).toBeVisible();
  })
})
