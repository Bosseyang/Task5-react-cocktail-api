import { useState } from "react";
import type { ICocktail } from "../types/types";
import {
  searchCocktailsByName,
  searchByIngredient,
  searchByCategory,
  searchByGlass,
} from "../services/cocktailApi";
import { usePagination } from "./usePagination";

const RESULTS_PER_PAGE: number = 10;
const API_LIMIT: number = 100;

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

export function useAdvancedSearch(resultsPerPage: number = RESULTS_PER_PAGE) {
  const [results, setResults] = useState<ICocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { page, setPage, totalPages, paginated, reset } = usePagination(results, resultsPerPage);

  async function handleSearch(params: SearchParams) {
    const key = serialize(params);
    reset();
    setError(null);

    if (cache.has(key)) {
      setResults(cache.get(key)!);
      return;
    }

    setLoading(true);

    try {
      let cocktails: ICocktail[] = [];

      if (params.name) {
        cocktails = await searchCocktailsByName(params.name);
      }
      if (params.ingredient) {
        const ing = await searchByIngredient(params.ingredient);
        cocktails = cocktails.length
          ? cocktails.filter((c) => ing.some((i) => i.id === c.id))
          : ing;
      }
      if (params.category) {
        const cat = await searchByCategory(params.category);
        cocktails = cocktails.length
          ? cocktails.filter((c) => cat.some((i) => i.id === c.id))
          : cat;
      }
      if (params.glass) {
        const gla = await searchByGlass(params.glass);
        cocktails = cocktails.length
          ? cocktails.filter((c) => gla.some((i) => i.id === c.id))
          : gla;
      }

      //Maximum from free version of API
      if (cocktails.length >= API_LIMIT) {
        setError("Too many results. Please refine your search");
        cocktails = cocktails.slice(0, API_LIMIT);
      }

      cache.set(key, cocktails);
      setResults(cocktails);
      setPage(1);
    } catch (err) {
      console.error("Search failed", err);
      setError("Error fetching items, please try again later");
    }
    setLoading(false);
  }

  return { results, paginated, page, setPage, totalPages, loading, handleSearch, error };
}
