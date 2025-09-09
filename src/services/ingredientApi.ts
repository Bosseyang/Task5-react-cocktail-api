import { mapRawCocktailData } from "./mapRawCocktailData";
import type { ICocktail, IIngredientDetail } from "../types/types";

const URL: string = "https://www.thecocktaildb.com/api/json/v1/1";

export async function getIngredientByName(name: string): Promise<IIngredientDetail | null> {
  const res = await fetch(`${URL}/search.php?i=${name}`);
  const data = await res.json();

  if (!data.ingredients || data.ingredients.length === 0) return null;

  const raw = data.ingredients[0];
  return {
    id: raw.idIngredient,
    name: raw.strIngredient,
    description: raw.strDescription,
    type: raw.strType,
    isAlcoholic: raw.strAlcohol === "Yes",
    abv: raw.strABV ?? null,
  };
}

export async function getCocktailsByIngredient(ingredient: string): Promise<ICocktail[]> {
  const res = await fetch(`${URL}/filter.php?i=${ingredient}`);
  const data = await res.json();
  if (!data.drinks) return [];

  return data.drinks.map(mapRawCocktailData);
}
