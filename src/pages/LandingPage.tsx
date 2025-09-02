import { useEffect, useState } from "react";
import { CocktailCard } from "../components/CocktailCard";
import type { ICocktail } from "../types/types";
import { getRandomCocktail } from "../cocktailApi";
import { Loader } from "../components/Loader";

export const LandingPage: React.FC = () => {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchRandom() {
    setLoading(true);
    const drink = await getRandomCocktail();
    console.log(drink);
    setCocktail(drink);
    setLoading(false);
  }

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <main className="main landing-page">
      <h2 className="h2 landing-page-h2">Random Cocktail</h2>
      {loading && <Loader />}
      {cocktail && <CocktailCard cocktail={cocktail} classStyle={"landing-page-image"} />}
    </main>
  );
};
