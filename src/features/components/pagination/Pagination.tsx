"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";

interface Props {
  page: number;
  totalPages: number;
}

export function Pagination({ page, totalPages }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function goToPage(nextPage: number) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(nextPage));

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={page <= 1}
        onClick={() => goToPage(page - 1)}
      >
        Prev
      </button>

      <span className={styles.pageInfo}>
        Page <strong>{page}</strong> of {totalPages}
      </span>

      <button
        className={styles.button}
        disabled={page >= totalPages}
        onClick={() => goToPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
