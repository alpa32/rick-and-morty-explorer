"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./SortToggle.module.css";

export function SortToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort") ?? "asc";

  function toggleSort() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sort === "asc" ? "desc" : "asc");
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleSort}>
        <span className={styles.icon}>
          {sort === "asc" ? "↑" : "↓"}
        </span>
        <span>
          Created: {sort === "asc" ? "Old to New" : "New to Old"}
        </span>
      </button>
    </div>
  );
}
