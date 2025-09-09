import { useState, useMemo } from "react";

export function usePagination<T>(items: T[], resultsPerPage: number) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / resultsPerPage);

  const paginated = useMemo(() => {
    const start = (page - 1) * resultsPerPage;
    return items.slice(start, start + resultsPerPage);
  }, [items, page, resultsPerPage]);

  const reset = () => setPage(1);

  return {
    page,
    setPage,
    totalPages,
    paginated,
    reset,
  };
}
