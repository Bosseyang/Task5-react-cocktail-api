import { useContext } from "react";
import { FavoriteContext } from "../components/features/favorites/context";
import { CocktailCard } from "../components/CocktailCard";

export const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <main className="favorites-page">
      <h2 className="favorites-h2">Your Favorite Cocktails</h2>


      <div className="favorites-container">
        {favorites.map((cocktail) => (
          <div className="" key={cocktail.id}>
          </div>
        ))}
      </div>
    </main>
  );
};
