import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("renders Vite + React heading", () => {
    render(<App />);
    const heading = screen.getByText("Vite + React");
    expect(heading).toBeInTheDocument();
  });

  it("renders count button with initial value 0", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  it("increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    
    fireEvent.click(button);
    
    expect(screen.getByRole("button", { name: /count is 1/i })).toBeInTheDocument();
  });

  it("renders Vite and React logos", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it("has correct links for logos", () => {
    render(<App />);
    const viteLink = screen.getByRole("link", { name: /vite logo/i });
    const reactLink = screen.getByRole("link", { name: /react logo/i });
    
    expect(viteLink).toHaveAttribute("href", "https://vite.dev");
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
  });
});
