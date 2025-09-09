import { useContext } from "react";
import { FavoriteContext } from "../app/context";
import { CocktailCard } from "../components/CocktailCard";

export const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <main className="favorites-page">
      <h2 className="favorites-h2">Your Favorite Cocktails</h2>

      {favorites.length === 0 && <p>You don't have any favorites yet</p>}

      <div className="favorites-container">
        {favorites.map((cocktail) => (
          <div className="" key={cocktail.id}>
            <CocktailCard cocktail={cocktail} cardSize="small" />
            {/* <button onClick={() => remove(cocktail)} className="remove-favorite-button">
              Remove
            </button> */}
          </div>
        ))}
      </div>
    </main>
  );
};
