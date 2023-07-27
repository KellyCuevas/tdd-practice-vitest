import {render, screen} from "@testing-library/react";
import App from "./App"


describe("App Component", () => {
  
  it("should have text hello world", ()=> {
    render(<App />);
    const message = screen.queryByText(/Hello World/i);
    expect(message).toBeVisible();
  });

  it("should have an h1 heading with hello world rendered", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {level: 1})
    expect(heading).toHaveTextContent(/hello world/i);
  });

})

