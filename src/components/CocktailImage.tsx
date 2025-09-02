import type { ICocktail } from "../types/types";

interface IImageProps {
  cocktail: ICocktail;
  classStyle?: string | undefined;
}
export const CocktailImage: React.FC<IImageProps> = ({ cocktail, classStyle }) => {
  return (
    <div className={`image-wrapper ${classStyle}`}>
      <img className="cocktail-card-img" src={cocktail.thumbnail} alt={cocktail.name} />
    </div>
  );
};
