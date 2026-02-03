import { Character } from "../types";
import styles from "./characters.module.css";

interface Props {
  characters: Character[];
}

export function CharactersGrid({ characters }: Props) {
  return (
    <div className={styles.grid}>
      {characters.map((character) => (
        <div key={character.id} className={styles.card}>
          <img
            src={character.image}
            alt={character.name}
            className={styles.avatar}
          />
          <h3>{character.name}</h3>
          <p>{character.species}</p>
          <p>Status: {character.status}</p>
        </div>
      ))}
    </div>
  );
}
