import { fetchFromApi } from "@/lib/api";
import { CharactersApiResponse } from "../types";

export type SortOrder = "asc" | "desc";

interface GetCharactersParams {
  page?: number;
  sortOrder?: SortOrder;
}

export async function getCharacters({
  page = 1,
  sortOrder = "asc",
}: GetCharactersParams): Promise<CharactersApiResponse> {
  const data = await fetchFromApi<CharactersApiResponse>(
    `/character?page=${page}`
  );

  const sortedResults = [...data.results].sort((a, b) => {
    const dateA = new Date(a.created).getTime();
    const dateB = new Date(b.created).getTime();

    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return {
    ...data,
    results: sortedResults,
  };
}
