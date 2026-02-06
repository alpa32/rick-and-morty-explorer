"use client";

import { useState } from "react";
import { SortOrder } from "@/features/characters/services/charactersService";
import styles from "./page.module.css";
import { useCharacters } from "@/features/characters/hooks/useCharacter";
import { ViewToggle } from "@/features/characters/components/ViewToggle";
import { CharactersGrid } from "@/features/characters/components/CharactersGrid";
import { CharactersTable } from "@/features/characters/components/CharactersTable";
import { useSearchParams } from "next/navigation";
import { SortToggle } from "@/features/characters/components/SortToggle";
import { Pagination } from "@/features/characters/components/Pagination";
import { FullScreenState } from "@/features/characters/components/FullScreenState";

export default function CharactersPage() {
 
const searchParams = useSearchParams();
const page = Number(searchParams.get("page") ?? 1);
const sortOrder = (searchParams.get("sort") as SortOrder) ?? "asc";
const view = searchParams.get("view") ?? "grid";

  const { characters, loading, error, totalPages } = useCharacters({
    page,
    sortOrder,
  });

  if (loading) {
    return (
      <FullScreenState variant="loading">
        <div>Loading characters…</div>
      </FullScreenState>
    );
  }
  
  if (error) {
    return (
      <FullScreenState variant="error">
        {error}
      </FullScreenState>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.toolbar}>
  <div className={styles.left}>
    <SortToggle />
  </div>
  <h1>Characters</h1>
  <div className={styles.right}>
    <ViewToggle />
  </div>
</div>

{view === "grid" ? (
  <CharactersGrid characters={characters} />
) : (
  <CharactersTable characters={characters} />
)}

      <Pagination page={page} totalPages={totalPages} />
    </main>
  );
}
