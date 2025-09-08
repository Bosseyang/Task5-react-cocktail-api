import { Link } from "react-router";
import type { ICocktail } from "../types/types";
import { CocktailImage } from "./CocktailImage";
import { FavoriteButton } from "./buttons/FavoriteButton";

interface ICocktailCardProps {
  cocktail: ICocktail;
  cardSize?: string;
}

export const CocktailCard: React.FC<ICocktailCardProps> = ({ cocktail, cardSize }) => {
  return (
    <article className="item cocktail-card-container">
      <span className="card-favorite-position">
        <FavoriteButton cocktail={cocktail} />
      </span>
      <Link to={`/cocktail/${cocktail.id}`} className={`cocktail-card cocktail-card-${cardSize}`}>
        <CocktailImage cocktail={cocktail} />
        <h2 className="cocktail-card-h2">{cocktail.name}</h2>
        <h3 className="hidden-h3">Click to see more 🢥</h3>
      </Link>
    </article>
  );
};
