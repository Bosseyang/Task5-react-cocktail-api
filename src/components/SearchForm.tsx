import { useState } from "react";
import { SearchButton } from "./buttons/SearchButton";

interface ISearchFormProps {
  onSearch: (query: string) => void;
}
export const SearchForm: React.FC<ISearchFormProps> = ({ onSearch }) => {
  const [input, setInput] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(input);
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter name of cocktail"
      />
      <SearchButton />
    </form>
  );
};
