
import { CharactersTable } from "@/features/components/characters/CharactersTable";
import { render, screen } from "@testing-library/react";
import { mockCharacters } from "../../test-utils/mockData";


describe("CharactersTable", () => {
  it("renders all characters", () => {
    render(<CharactersTable characters={mockCharacters} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Morty Smith")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("applies correct status classes", () => {
    render(<CharactersTable characters={mockCharacters} />);
    expect(screen.getByText("Alive")).toHaveClass("alive");
    expect(screen.getByText("unknown")).toHaveClass("unknown");
  });

  it("renders empty table if no characters", () => {
    render(<CharactersTable characters={[]} />);
    expect(screen.getAllByRole("row")).toHaveLength(1);
  });
});
