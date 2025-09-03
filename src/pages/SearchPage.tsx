import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { searchCocktailsByName } from "../services/cocktailApi";
import type { ICocktail } from "../types/types";
import { CocktailList } from "../components/CocktailList";

export const SearchPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<ICocktail[]>([]);

  async function handleSearch(q: string) {
    if (!q.trim()) return;
    setLoading(true);
    const cocktails = await searchCocktailsByName(q);
    setResults(cocktails);
    setQuery(q);
    setLoading(false);
  }

  return (
    <section className="search-page">
      <h1 className="search-page-h1"></h1>
      <SearchForm onSearch={handleSearch} />

      <CocktailList cocktails={results} />
    </section>
  );
};
