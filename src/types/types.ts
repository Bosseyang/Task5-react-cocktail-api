export interface IIngredient {
  ingredient: string;
  measure: string | null;
}

export interface ICocktail {
  id: string;
  name: string;
  tags: string[];
  category: string;
  alcoholic: boolean;
  glass: string;
  instructions: string;
  thumbnail: string;
  ingredients: IIngredient[];
}

export interface IIngredientDetail {
  id: string;
  name: string;
  description?: string;
  type?: string;
  isAlcoholic?: boolean;
  abv?: string;
}
