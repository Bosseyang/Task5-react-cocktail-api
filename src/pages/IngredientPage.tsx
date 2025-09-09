import { type ICocktail, type IIngredientDetail } from "../types/types";
import { useEffect, useState } from "react";
import { getCocktailsByIngredient, getIngredientByName } from "../services/ingredientApi";
import { Loader } from "../components/Loader";
export const IngredientPage: React.FC = () => {
  const [ingredient, setIngredient] = useState<IIngredientDetail | null>(null);
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
  }, [name]);
  if (loading) return <Loader />;
  if (!ingredient) return <p>No ingredient found</p>;
  return (
    <main className="main ingredient-page">
      <h2>{ingredient.name}</h2>
      <section className="ingredient-details ">
        <h3 className="ingredient-details-h3">Ingredient Details</h3>
      </section>
      <section className="ingredient-cocktails ">
        <h3 className="ingredient-details-h3">Cocktails using {ingredient.name}</h3>
      </section>
    </main>
  );
};
