import { useEffect, useState } from "react";
import { type ICocktail } from "../types/types";
import { getRandomCocktail } from "../cocktailApi";

export function useRandomCocktail() {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchRandom() {
    setLoading(true);
    const drink = await getRandomCocktail();
    setCocktail(drink);
    setLoading(false);
  }

  useEffect(() => {
    fetchRandom();
  }, []);

  return { cocktail, loading, fetchRandom };
}
