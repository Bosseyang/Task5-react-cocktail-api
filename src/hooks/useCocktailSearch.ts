import { useState } from "react";
import { searchCocktailsByName } from "../services/cocktailApi";
import type { ICocktail } from "../types/types";
const RESULTS_PER_PAGE: number = 10;

export function useCocktailSearch() {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ICocktail[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  async function handleSearch(q: string) {
    if (!q.trim()) return;
    setLoading(true);
    const cocktails = await searchCocktailsByName(q);
    setResults(cocktails);
    setQuery(q);
    setPage(1);
    setLoading(false);
  }

  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);
  const paginated = results.slice((page - 1) * RESULTS_PER_PAGE, page * RESULTS_PER_PAGE);

  return { handleSearch, loading, results, query, setQuery, page, setPage, totalPages, paginated };
}
