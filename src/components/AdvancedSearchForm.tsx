import { useState } from "react";
import { SearchButton } from "./buttons/SearchButton";
import { SearchOptionsButton } from "./buttons/SearchOptionsButton";

interface IAdvancedSearchFromProps {
  onSearch: (params: {
    name?: string;
    ingredient?: string;
    category?: string;
    glass?: string;
  }) => void;
}

export function AdvancedSearchForm({ onSearch }: IAdvancedSearchFromProps) {
  const [name, setName] = useState<string>("");
  const [ingredient, setIngredient] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [glass, setGlass] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [hidden, setHidden] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name && !ingredient && !category && !glass) {
      setError("Please enter at least one search parameter.");
      return;
    }
    setError("");
    onSearch({ name, ingredient, category, glass });
  }

  return (
    <form onSubmit={handleSubmit} className="advanced-search-form">
      {error && <p className="form-error-text">{error}</p>}
      <input
        id={name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={(e) => e.target.select()}
        placeholder="Search by cocktail name"
        className="search-input"
      />
      <div className="search-btn-wrapper">
        <SearchButton />
        <SearchOptionsButton
          onClick={() => setHidden((prev) => !prev)}
          name={hidden ? "Hide advanced options" : "Show advanced options"}
        />
      </div>

      {hidden && (
        <div className="adv-search-wrapper">
          <input
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            onFocus={(e) => e.target.select()}
            placeholder="Search by ingredient"
            className="search-input adv"
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            onFocus={(e) => e.target.select()}
            placeholder="Search by category"
            className="search-input adv"
          />
          <input
            value={glass}
            onChange={(e) => setGlass(e.target.value)}
            onFocus={(e) => e.target.select()}
            placeholder="Search by glass"
            className="search-input adv"
          />
        </div>
      )}
    </form>
  );
}
