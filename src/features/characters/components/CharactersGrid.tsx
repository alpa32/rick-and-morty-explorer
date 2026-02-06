import { Character } from "../types";
import styles from "./characters.module.css";

interface Props {
  characters: Character[];
}

export function CharactersGrid({ characters }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {characters.map((character) => (
          <div key={character.id} className={styles.card}>
            <img
              src={character.image}
              alt={character.name}
              className={styles.image}
            />

            <div className={styles.info}>
              <h2 className={styles.name}>Name: {character.name}</h2>

              <div className={styles.meta}>
                <span>Species: {character.species}</span>
              </div>

              
              <div>
                <span style={{fontSize: "0.8rem",
    fontWeight: 600}}>Status: </span>
              <span
                className={`${styles.status} ${
                  styles[character.status.toLowerCase()]
                }`}
              >
                {character.status}
              </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
