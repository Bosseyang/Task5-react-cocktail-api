import { Link } from "react-router";
import type { ICocktail } from "../types/types";
import { InfoP } from "./InfoP";

interface IInfoProps {
  cocktail: ICocktail;
}

export const CocktailIngredients: React.FC<IInfoProps> = ({ cocktail }: IInfoProps) => {
  return (
    <div className="ingredients-container">
      <div className="info-wrapper">
        {cocktail.alcoholic ? (
          <InfoP label={"Alcoholic:"} info={"Yes"} />
        ) : (
          <InfoP label={"Alcoholic:"} info={"No"} />
        )}
        <InfoP label={"Category:"} info={cocktail.category} />
        <InfoP label={"Glass:"} info={cocktail.glass} />
        {cocktail.tags.length ? (
          <InfoP label={"Tags:"} info={`#${cocktail.tags.join(", #")}`} />
        ) : (
          ""
        )}
      </div>
      <h3 className="ingredients-h3">Ingredients</h3>
      <ul className="ingredients-list">
        {cocktail.ingredients.map((ing) => (
          <li key={ing.ingredient}>
            <strong>
              <Link to={`/ingredient/${ing.ingredient}`} className="ingredient-link">
                {ing.ingredient}
              </Link>
            </strong>
            {ing.measure && ` - ${ing.measure}`}
          </li>
        ))}
      </ul>
      <div className="instructions-wrapper">
        <h3 className="instructions-h3">Instructions</h3>
        <p className="instructions-p">{cocktail.instructions}</p>
      </div>
    </div>
  );
};
