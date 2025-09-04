import { useState } from "react";
import type { ICocktail } from "../types/types";
import {
  searchCocktailsByName,
  searchByIngredient,
  searchByCategory,
  searchByGlass,
} from "../services/cocktailApi";

const RESULTS_PER_PAGE = 10;

type SearchParams = {
  name?: string;
  ingredient?: string;
  category?: string;
  glass?: string;
};

const cache = new Map<string, ICocktail[]>();

function serialize(params: SearchParams) {
  return JSON.stringify(params);
}

export function useAdvancedSearch() {
  const [results, setResults] = useState<ICocktail[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleSearch(params: SearchParams) {
    const key = serialize(params);
    if (cache.has(key)) {
      setResults(cache.get(key)!);
      setPage(1);
      return;
    }

    setLoading(true);
    let cocktails: ICocktail[] = [];

    if (params.name) {
      cocktails = await searchCocktailsByName(params.name);
    }
    if (params.ingredient) {
      const ing = await searchByIngredient(params.ingredient);
      cocktails = cocktails.length ? cocktails.filter((c) => ing.some((i) => i.id === c.id)) : ing;
    }
    if (params.category) {
      const cat = await searchByCategory(params.category);
      cocktails = cocktails.length ? cocktails.filter((c) => cat.some((i) => i.id === c.id)) : cat;
    }
    if (params.glass) {
      const gla = await searchByGlass(params.glass);
      cocktails = cocktails.length ? cocktails.filter((c) => gla.some((i) => i.id === c.id)) : gla;
    }

    cache.set(key, cocktails);
    setResults(cocktails);
    setPage(1);
    setLoading(false);
  }

  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);
  const paginated = results.slice((page - 1) * RESULTS_PER_PAGE, page * RESULTS_PER_PAGE);

  return { results, paginated, page, setPage, totalPages, loading, handleSearch };
}
