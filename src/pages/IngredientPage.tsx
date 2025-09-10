import { useParams } from "react-router";
import { type ICocktail, type IIngredientDetail } from "../types/types";
import { useEffect, useState } from "react";
import { getCocktailsByIngredient, getIngredientByName } from "../services/ingredientApi";
import { Loader } from "../components/Loader";
import { useIngredient } from "../hooks/useIngredient";
import { IngredientDetails } from "../components/IngredientDetails";
import { IngredientCocktails } from "../components/IngredientCocktails";

export const IngredientPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const { ingredient, cocktails, loading } = useIngredient(name);

  if (loading) return <Loader />;
  if (!ingredient) return <p>No ingredient found</p>;

  return (
    <main className="main ingredient-page">
      <h2 className="ingredient-page h2">{ingredient.name}</h2>
      <IngredientDetails ingredient={ingredient} />
      <IngredientCocktails cocktails={cocktails} name={ingredient.name} />
    </main>
  );
};
