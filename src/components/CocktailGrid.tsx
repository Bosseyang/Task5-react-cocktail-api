import type { ICocktail } from "../types/types";
import { CocktailCard } from "./CocktailCard";

interface ICocktailGridProps {
  cocktails: ICocktail[];
}

export const CocktailGrid: React.FC<ICocktailGridProps> = ({ cocktails }) => (
  <div className="grid-view grid">
    {cocktails.map((cocktail) => (
      <CocktailCard key={cocktail.id} cocktail={cocktail} cardSize="small" />
    ))}
  </div>
);
