import HomePage from "@/app/page";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
  it("renders the hero section with title and subtitle", () => {
    render(<HomePage />);

    // Check the main title
    expect(screen.getByRole("heading", { name: /Rick and Morty Explorer/i })).toBeInTheDocument();

    // Check subtitle
    expect(screen.getByText(/Are you ready to discover your favourite characters/i)).toBeInTheDocument();
    
    // Check card content
    expect(screen.getByText(/Curious to know who survived\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Want to explore species, status, and more\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Click below and start your adventure!/i)).toBeInTheDocument();
  });

  it("renders the Explore Characters link with correct href", () => {
    render(<HomePage />);

    const link = screen.getByRole("link", { name: /Explore Characters/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/characters");
  });
});
