import Link from "next/link";
import styles from "./AppLayout.module.css";

type Props = {
  children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
  return (
    <>
      <header
       className={styles.header}
      >
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/characters" className={styles.link}>
            Characters
          </Link>
        </nav>
      </header>

      {children}
    </>
  );
}
