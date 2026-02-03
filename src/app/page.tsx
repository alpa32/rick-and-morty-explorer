import Link from "next/link";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Rick and Morty Explorer</h1>

        <p className={styles.subtitle}>
          Are you ready to discover your favourite characters
          from the Rick and Morty universe ?
        </p>

        <div className={styles.card}>
          <p>
            Curious to know who survived?
          </p>
          <p>
            Want to explore species, status, and more?
          </p>
          <p>
            Click below and start your adventure!
          </p>
        </div>

        <Link href="/characters" className={styles.ctaButton}>
          Explore Characters →
        </Link>
      </section>
    </main>
  );
}
