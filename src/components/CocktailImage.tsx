import type { ICocktail } from "../types/types";

interface IImageProps {
  cocktail: ICocktail;
}

export const CocktailImage: React.FC<IImageProps> = ({ cocktail }) => {
  return (
    <div className={`image-wrapper landing-page-image list-item-image`}>
      <img className="cocktail-card-img" src={cocktail.thumbnail} alt={cocktail.name} />
    </div>
  );
};
