import { Character } from "../../characters/types";
import styles from "./Characters.module.css";

interface Props {
  characters: Character[];
}

export function CharactersTable({ characters }: Props) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <td>
                <img
                  src={character.image}
                  alt={character.name}
                  className={styles.avatar}
                />
              </td>
              <td>{character.name}</td>
              <td>
                <span>{character.species}</span>
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    styles[character.status.toLowerCase()]
                  }`}
                >
                  {character.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
