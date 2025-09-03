import type { ICocktail } from "../types/types";
import { mapRawCocktailData } from "./mapRawCocktailData";

const URL = "https://www.thecocktaildb.com/api/json/v1/1";
export async function getRandomCocktail(): Promise<ICocktail> {
  const res = await fetch(`${URL}/random.php`);
  if (!res.ok) throw new Error("Failed to fetch a random cocktail");
  const data = await res.json();
  return mapRawCocktailData(data.drinks[0]);
}

export async function getCocktailById(id: string): Promise<ICocktail> {
  const res = await fetch(`${URL}/lookup.php?i=${id}`);
  if (!res.ok) throw new Error(`Failed to fetch the cocktail with id: ${id}`);
  const data = await res.json();
  return mapRawCocktailData(data.drinks[0]);
}

export async function searchCocktailsByName(name: string): Promise<ICocktail[]> {
  const res = await fetch(`${URL}/search.php?s=${name}`);
  if (!res.ok) throw new Error(`Failed to fetch the cocktail with id: ${name}`);
  const data = await res.json();
  if (!data.drinks) return [];
  return data.drinks.map(mapRawCocktailData);
}
