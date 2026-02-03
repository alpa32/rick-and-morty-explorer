export type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface Character {
    id: number;
    name: string;
    status: CharacterStatus;
    species: string;
    image: string;
    created: string;
  }

  export interface CharactersApiResponse {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Character[];
  }