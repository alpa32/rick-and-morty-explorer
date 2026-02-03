"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

    console.log("params", params);
    params.set("page", String(nextPage));

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <button
        disabled={page <= 1}
        onClick={() => goToPage(page - 1)}
      >
        Prev
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => goToPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
