import { useEffect, useState } from "react";
import type { ICocktail } from "../types/types";
import { Loader } from "../components/Loader";
import { CocktailIngredients } from "../components/CocktailInfo";
import { useParams } from "react-router";
import { getCocktailById } from "../services/cocktailApi";
import { FavoriteButton } from "../components/buttons/FavoriteButton";

export const CocktailInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getCocktailById(id).then((drink) => {
      setCocktail(drink);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;
  if (!cocktail) return <p>No cocktail was found.</p>;
  return (
    <section className="section cocktail-info-page">
      <h2 className="info-page-h2">{cocktail.name}</h2>
      <div className="content info-page-wrapper">
        <div className="info-image-container">
          <span className="info-favorite-position">
            <FavoriteButton cocktail={cocktail} />
          </span>
          {/* <CocktailImage cocktail={cocktail} /> */}
          <img className="cocktail-info-image" src={cocktail.thumbnail} />
        </div>
        <CocktailIngredients cocktail={cocktail} />
      </div>
    </section>
  );
};
