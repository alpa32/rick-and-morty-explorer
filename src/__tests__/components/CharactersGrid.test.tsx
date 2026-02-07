
import { CharactersGrid } from "@/features/components/characters/CharactersGrid";
import { render, screen } from "@testing-library/react";
import { mockCharacters } from "../../test-utils/mockData";

describe("CharactersGrid", () => {
  it("renders a card for each character", () => {
    render(<CharactersGrid characters={mockCharacters} />);

    expect(screen.getByText("Name: Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Name: Morty Smith")).toBeInTheDocument();
  });

  it("renders character images with correct src and alt text", () => {
    render(<CharactersGrid characters={mockCharacters} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);

    expect(images[0]).toHaveAttribute(
      "src",
      "rick.png"
    );
    expect(images[0]).toHaveAttribute("alt", "Rick Sanchez");
  });

  it("renders species information correctly", () => {
    render(<CharactersGrid characters={mockCharacters} />);

    expect(screen.getAllByText(/Species: Human/i)).toHaveLength(2);
  });

  it("renders status text with correct styling class", () => {
    render(<CharactersGrid characters={mockCharacters} />);

    const aliveStatus = screen.getByText("Alive");
    const unknownStatus = screen.getByText("unknown");

    expect(aliveStatus).toBeInTheDocument();
    expect(aliveStatus.className).toContain("alive");

    expect(unknownStatus).toBeInTheDocument();
    expect(unknownStatus.className).toContain("unknown");
  });

  it("renders nothing when characters list is empty", () => {
    render(<CharactersGrid characters={[]} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByText(/Name:/i)).not.toBeInTheDocument();
  });
});
