import { useRandomCocktail } from "../hooks/useRandomCocktail";
import { CocktailCard } from "../components/CocktailCard";
import { Loader } from "../components/Loader";
import { IconButton } from "../components/buttons/IconButton";

export const LandingPage: React.FC = () => {
  const { cocktail, loading, fetchRandom } = useRandomCocktail();

  return (
    <main className="main landing-page">
      <IconButton onClick={fetchRandom} icon="refresh" name="Random Cocktail" />
      {loading && <Loader />}
      <div className={`load-wrapper ${loading ? "loading" : ""}`}>
        {cocktail && <CocktailCard cocktail={cocktail} />}
      </div>
    </main>
  );
};
