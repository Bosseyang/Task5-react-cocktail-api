import type { IIngredientDetail } from "../types/types";
import { InfoP } from "./InfoP";

interface IIngredientDetailsProps {
  ingredient: IIngredientDetail;
}

export const IngredientDetails: React.FC<IIngredientDetailsProps> = ({ ingredient }) => {
  return (
    <section className="section ingredient-details ">
      <div className="ingredient-details-container">
        <h3 className="ingredient-details-h3">Ingredient details</h3>
        {ingredient.type && <InfoP label="Type: " info={ingredient.type} />}
        <InfoP label="Alcoholic: " info={ingredient.isAlcoholic ? "Yes" : "No"} />
        {ingredient.abv && <InfoP label="ABV: " info={`${ingredient.abv}%`} />}
      </div>
      <div className="ingredient-description-container">
        {ingredient.description && <h4 className="">Ingredient description</h4>}
        {ingredient.description && <p className="">{ingredient.description}</p>}
      </div>
    </section>
  );
};
