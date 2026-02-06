"use client";

import { Suspense } from "react";
import CharactersContent from "./CharactersContent";


export default function CharactersClient() {
  return (
    <Suspense fallback={<></>}>
      <CharactersContent />
    </Suspense>
  );
}