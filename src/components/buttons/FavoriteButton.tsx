import { useContext } from "react";
import type { ICocktail } from "../../types/types";
import { FavoriteContext } from "../features/favorites/context";

interface IFavoriteButtonContext {
  cocktail: ICocktail;
}

export const FavoriteButton: React.FC<IFavoriteButtonContext> = ({ cocktail }) => {
  const { add, remove, checkIfFavorite } = useContext(FavoriteContext);
  const isFavorite = checkIfFavorite(cocktail);
  return (
    <button
      onClick={() => (isFavorite ? remove(cocktail) : add(cocktail))}
      className={`button favorite-button`}
      title="favorite"
    >
      <span className={`favorite material-symbols-outlined ${isFavorite ? "fill" : ""}`}>
        favorite
      </span>
    </button>
  );
};
