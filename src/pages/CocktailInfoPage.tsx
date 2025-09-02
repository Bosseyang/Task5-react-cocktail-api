import { useEffect, useState } from "react";
import type { ICocktail } from "../types/types";
import { Loader } from "../components/Loader";
import { CocktailImage } from "../components/CocktailImage";
import { CocktailIngredients } from "../components/CocktailIngredients";
import { useParams } from "react-router";
import { getCocktailById } from "../services/cocktailApi";

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
        <div className="image-category">
          <CocktailImage cocktail={cocktail} classStyle="info-page-image" />
          <p className="info-p">
            <strong>Category:</strong> {cocktail.category}
          </p>
          <p className="info-p">
            <strong>Alcoholic:</strong> {cocktail.alcoholic ? "Yes" : "No"}
          </p>
          <p className="info-p">
            <strong>Glass:</strong> {cocktail.glass}
          </p>
        </div>
        <CocktailIngredients cocktail={cocktail} />
      </div>
    </section>
  );
};
