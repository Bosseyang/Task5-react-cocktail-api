import { useParams } from "react-router";
import { type ICocktail, type IIngredientDetail } from "../types/types";
import { useEffect, useState } from "react";
import { getCocktailsByIngredient, getIngredientByName } from "../services/ingredientApi";
import { Loader } from "../components/Loader";
import { InfoP } from "../components/InfoP";
import { CocktailCard } from "../components/CocktailCard";

export const IngredientPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
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

    fetchData();
  }, [name]);

  if (loading) return <Loader />;
  if (!ingredient) return <p>No ingredient found</p>;

  return (
    <main className="main ingredient-page">
      <h2>{ingredient.name}</h2>

      <section className="ingredient-details ">
        <h3 className="ingredient-details-h3">Ingredient Details</h3>
        {ingredient.type && <InfoP label="Type: " info={ingredient.type} />}
        <InfoP label="Alcoholic: " info={ingredient.isAlcoholic ? "Yes" : "No"} />
        {ingredient.abv && <InfoP label="ABV: " info={`${ingredient.abv}%`} />}
        <h4>Ingredient Description</h4>
        {ingredient.description && <p className="">{ingredient.description}</p>}
      </section>

      <section className="ingredient-cocktails ">
        <h3 className="ingredient-details-h3">Cocktails using {ingredient.name}</h3>
        {cocktails.length === 0 ? (
          <p>No cocktails found with this ingredient.</p>
        ) : (
          <div className="ingredient-cocktails-grid">
            {cocktails.map((c) => (
              <CocktailCard key={c.id} cocktail={c} cardSize="small" />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
