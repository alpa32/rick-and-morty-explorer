import { Character } from "../types";
import styles from "./characters.module.css";

interface Props {
  characters: Character[];
}

export function CharactersTable({ characters }: Props) {
  return (
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
                className={styles.tableAvatar}
              />
            </td>
            <td>{character.name}</td>
            <td>{character.species}</td>
            <td>{character.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
