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

//Extended SearchPage++
export async function searchByIngredient(ingredient: string): Promise<ICocktail[]> {
  const res = await fetch(`${URL}/filter.php?i=${ingredient}`);
  if (!res.ok) throw new Error("Failed ingredient search");
  const data = await res.json();
  if (!data.drinks) return [];
  return await fetchCocktailDetails(data.drinks.map((d: any) => d.idDrink));
}

export async function searchByCategory(category: string): Promise<ICocktail[]> {
  const res = await fetch(`${URL}/filter.php?c=${category}`);
  if (!res.ok) throw new Error("Failed category search");
  const data = await res.json();
  if (!data.drinks) return [];
  return await fetchCocktailDetails(data.drinks.map((d: any) => d.idDrink));
}

export async function searchByGlass(glass: string): Promise<ICocktail[]> {
  const res = await fetch(`${URL}/filter.php?g=${glass}`);
  if (!res.ok) throw new Error("Failed glass search");
  const data = await res.json();
  if (!data.drinks) return [];
  return await fetchCocktailDetails(data.drinks.map((d: any) => d.idDrink));
}

async function fetchCocktailDetails(ids: string[]): Promise<ICocktail[]> {
  const promises = ids.map(async (id) => {
    const res = await fetch(`${URL}/lookup.php?i=${id}`);
    const data = await res.json();
    return mapRawCocktailData(data.drinks[0]);
  });
  return Promise.all(promises);
}
