import type { ICocktail } from "../types/types";

interface IInfoProps {
  cocktail: ICocktail;
}

export const CocktailIngredients: React.FC<IInfoProps> = ({ cocktail }: IInfoProps) => {
  return (
    <div className="ingredients-wrapper">
      <p className="info-p">
        <strong>Alcoholic:</strong> {cocktail.alcoholic ? "Yes" : "No"}
      </p>
      <p className="info-p">
        <strong>Category:</strong> {cocktail.category}
      </p>
      <p className="info-p">
        <strong>Glass:</strong> {cocktail.glass}
      </p>
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
