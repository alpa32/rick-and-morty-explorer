"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./ViewToggle.module.css";

export function ViewToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const view = searchParams.get("view") ?? "grid";

  function setView(nextView: "grid" | "table") {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", nextView);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${
          view === "grid" ? styles.active : ""
        }`}
        onClick={() => setView("grid")}
        aria-pressed={view === "grid"}
      >
        ⬚ Grid
      </button>

      <button
        className={`${styles.button} ${
          view === "table" ? styles.active : ""
        }`}
        onClick={() => setView("table")}
        aria-pressed={view === "table"}
      >
        ☰ Table
      </button>
    </div>
  );
}
