import { useEffect, useState, type ReactElement, type ReactNode } from "react";
import type { ICocktail } from "../../types/types";
import { FavoriteContext, type IFavoriteContext } from "./FavoriteContext";

interface IFavoriteContextProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "favorites";

export const FavoriteContextProvider = ({
  children,
}: IFavoriteContextProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<ICocktail[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        console.warn("Failed to parse favorites from localStorage");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const add = (cocktail: ICocktail) => {
    if (!favorites.some((f) => f.id === cocktail.id)) {
      setFavorites([cocktail, ...favorites]);
    }
  };

  const remove = (cocktail: ICocktail) =>
    setFavorites(favorites.filter((f) => f.id !== cocktail.id));

  const checkIfFavorite = (cocktail: ICocktail) => favorites.some((f) => f.id === cocktail.id);

  const values: IFavoriteContext = {
    add,
    favorites,
    checkIfFavorite,
    remove,
  };

  return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>;
};
