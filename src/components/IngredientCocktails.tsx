import type { ICocktail } from "../types/types";
import { InfiniteScroll } from "./InfiniteScroll";

interface IIngredientCocktailsProps {
  name: string;
  cocktails: ICocktail[];
}

export const IngredientCocktails: React.FC<IIngredientCocktailsProps> = ({ name, cocktails }) => {
  return (
    <section className="ingredient-cocktails-section ">
      <h3 className="ingredient-details-h3">Cocktails using {name}</h3>
      <InfiniteScroll items={cocktails} batchSize={4} />
    </section>
  );
};
