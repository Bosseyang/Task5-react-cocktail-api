import { useEffect, useState } from "react";
import { type ICocktail } from "../types/types";
import { getRandomCocktail } from "../services/cocktailApi";

const STORAGE_KEY = "random_cocktail";

export function useRandomCocktail() {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchRandom() {
    setLoading(true);
    try {
      const drink = await getRandomCocktail();
      setCocktail(drink);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(drink));
    } catch (err) {
      console.error("Failed to fetch random cocktail:", err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchRandom();
  }, []);
  return { cocktail, loading, fetchRandom };
}
