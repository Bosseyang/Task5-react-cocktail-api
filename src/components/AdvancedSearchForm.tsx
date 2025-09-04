import { useState } from "react";
import { SearchButton } from "./buttons/SearchButton";

interface IAdvancedSearchFromProps {
  onSearch: (params: { ingredient?: string; category?: string; glass?: string }) => void;
}

export function AdvancedSearchForm({ onSearch }: IAdvancedSearchFromProps) {
  const [ingredient, setIngredient] = useState("");
  const [category, setCategory] = useState("");
  const [glass, setGlass] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ingredient && !category && !glass) {
      setError("Please enter at least one search parameter.");
      return;
    }
    setError("");
    onSearch({ ingredient, category, glass });
  }

  return (
    <form onSubmit={handleSubmit} className="advanced-search-form">
      {error && <p className="error-text">{error}</p>}
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
      <SearchButton />
    </form>
  );
}
