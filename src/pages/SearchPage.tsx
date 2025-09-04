import { SearchForm } from "../components/SearchForm";
import { CocktailList } from "../components/CocktailList";
import { Loader } from "../components/Loader";
import { useCocktailSearch } from "../hooks/useCocktailSearch";
import { Pagination } from "../components/Pagination";

export const SearchPage: React.FC = () => {
  const { handleSearch, loading, page, setPage, totalPages, paginated } = useCocktailSearch();

  return (
    <section className="search-page">
      <h1 className="search-page-h1"></h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      <div className={`load-wrapper ${loading ? "loading" : ""}`}>
        <CocktailList cocktails={paginated} />
      </div>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
};
