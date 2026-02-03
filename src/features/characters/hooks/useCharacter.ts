import { useEffect, useState } from "react";
import { Character } from "../types";
import { getCharacters } from "../services/charactersService";


export function useCharacters({page, sortOrder}: {page: number; sortOrder?: "asc" | "desc"}) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await getCharacters({page, sortOrder});
        if (!cancelled) {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to load characters.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [page, sortOrder]);

  return { characters, loading, error, totalPages };
}
