import { useState, type ReactElement, type ReactNode } from "react";
import type { ICocktail } from "../../../../types/types";
import { FavoriteContext, type IFavoriteContext } from "./FavoriteContext";

interface IFavoriteContextProviderProps {
  children: ReactNode;
}

export const FavoriteContextProvider = ({
  children,
}: IFavoriteContextProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<ICocktail[]>([]);

  const add = (cocktail: ICocktail) => setFavorites([cocktail, ...favorites]);

  const checkIfFavorite = (cocktail: ICocktail) => favorites.includes(cocktail);

  const remove = (cocktail: ICocktail) =>
    setFavorites(favorites.filter((f) => f.id !== cocktail.id));
  const values: IFavoriteContext = {
    add,
    favorites,
    checkIfFavorite,
    remove,
  };

  return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>;
};
