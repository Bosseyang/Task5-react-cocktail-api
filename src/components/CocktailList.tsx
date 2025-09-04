import { Link } from "react-router";
import type { ICocktail } from "../types/types";
// import { CocktailCard } from "./CocktailCard";

interface ICocktailListProps {
  cocktails: ICocktail[];
}
export const CocktailList: React.FC<ICocktailListProps> = ({ cocktails }) => {
  if (cocktails.length === 0) {
    return <h2>No cocktails found</h2>;
  }
  return (
    <ul className="cocktail-list">
      {cocktails.map((cocktail) => (
        <li className="cocktail-item" key={cocktail.id}>
          {/* <CocktailCard cocktail={cocktail} /> */}
          <Link to={`/cocktail/${cocktail.id}`}>
            <h3 className="list-cocktail-name">{cocktail.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
