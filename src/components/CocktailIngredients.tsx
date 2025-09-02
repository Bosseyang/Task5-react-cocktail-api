import type { ICocktail } from "../types/types";

interface IIngredientsProps {
  cocktail: ICocktail;
}

export const CocktailIngredients: React.FC<IIngredientsProps> = ({
  cocktail,
}: IIngredientsProps) => {
  return (
    <div className="ingredients-wrapper">
      <h2 className="ingredients-h2">Ingredients</h2>
      <ul className="ingredients-list">
        {cocktail.ingredients.map((ing, index) => (
          <li key={index}>
            {ing.ingredient} {ing.measure && `- ${ing.measure}`}
          </li>
        ))}
      </ul>
      <div className="instructions-wrapper">
        <h2 className="instructions-h2">Instructions</h2>
        <p className="instructions-p">{cocktail.instructions}</p>
      </div>
    </div>
  );
};
