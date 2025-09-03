import { useRandomCocktail } from "../hooks/useRandomCocktail";
import { CocktailCard } from "../components/CocktailCard";
import { Loader } from "../components/Loader";

export const LandingPage: React.FC = () => {
  const { cocktail, loading, fetchRandom } = useRandomCocktail();

  return (
    <main className="main landing-page">
      <button onClick={fetchRandom}>
        <img src="/cocktail.svg" />
        <h2 className="h2 landing-page-h2">Random Cocktail</h2>
      </button>
      {loading && <Loader />}
      <div className={`load-card ${loading ? "loading" : ""}`}>
        {cocktail && <CocktailCard cocktail={cocktail} classStyle={`landing-page-image`} />}
      </div>
    </main>
  );
};
