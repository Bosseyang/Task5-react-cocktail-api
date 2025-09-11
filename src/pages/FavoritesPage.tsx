import { useContext } from "react";
import { FavoriteContext } from "../app/context";
import { InfiniteScroll } from "../components/InfiniteScroll";

export const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <main className="favorites-page">
      <h2 className="favorites-h2">Your Favorite Cocktails</h2>
      {favorites.length === 0 && <p>You don't have any favorites yet</p>}
      <InfiniteScroll items={favorites} batchSize={4} />
    </main>
  );
};
