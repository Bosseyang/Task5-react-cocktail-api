import { Link } from "react-router";
import type { ICocktail } from "../types/types";
import { CocktailImage } from "./CocktailImage";

interface ICocktailCardProps {
  cocktail: ICocktail;
  classStyle?: string;
}

export const CocktailCard: React.FC<ICocktailCardProps> = ({ cocktail, classStyle }) => {
  return (
    <Link to={`/cocktail/${cocktail.id}`} className="cocktail-card-link">
      <article className="cocktail-card">
        <CocktailImage cocktail={cocktail} classStyle={classStyle} />
        <h2 className="cocktail-card-h2">{cocktail.name}</h2>
        <h3 className="hidden-h3">Click to see more</h3>
      </article>
    </Link>
  );
};
