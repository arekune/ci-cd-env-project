import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  it("should render a button", () => {
    render(<App />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should show an integer value after clicking the button", async () => {
    render(<App />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(button.textContent).toMatch(/count is \d+/i);
  });
});