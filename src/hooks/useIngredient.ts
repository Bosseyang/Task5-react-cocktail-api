import { useEffect, useState } from "react";
import { getIngredientByName, getCocktailsByIngredient } from "../services/ingredientApi";
import type { ICocktail, IIngredientDetail } from "../types/types";

export function useIngredient(name?: string) {
  const [ingredient, setIngredient] = useState<IIngredientDetail | null>(null);
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!name) return;
      setLoading(true);
      const ing = await getIngredientByName(name);
      setIngredient(ing);

      const drinks = await getCocktailsByIngredient(name);
      setCocktails(drinks);

      setLoading(false);
    }

    fetchData();
  }, [name]);

  return { ingredient, cocktails, loading };
}
