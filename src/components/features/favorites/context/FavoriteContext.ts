import { createContext } from "react";
import type { ICocktail } from "../../../../types/types";

export interface IFavoriteContext {
  favorites: ICocktail[];
  add: (cocktail: ICocktail) => void;
  remove: (cocktail: ICocktail) => void;
  checkIfFavorite: (cocktail: ICocktail) => boolean;
}

export const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);
