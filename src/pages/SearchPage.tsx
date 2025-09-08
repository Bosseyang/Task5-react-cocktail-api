import { CocktailList } from "../components/CocktailList";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";
import { AdvancedSearchForm } from "../components/AdvancedSearchForm";
import { useAdvancedSearch } from "../hooks/useAdvancedSearch";

export const SearchPage: React.FC = () => {
  // const { handleSearch, loading, page, setPage, totalPages, paginated } = useCocktailSearch();
  const { handleSearch, loading, page, setPage, totalPages, paginated, error } =
    useAdvancedSearch(10);

  return (
    <section className="search-page">
      <h1 className="search-page-h1"></h1>
      {/* <SearchForm onSearch={(q) => handleSearch({ name: q })} /> */}
      <AdvancedSearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p className="form-error-text">{error}</p>}
      <div className={`load-wrapper ${loading ? "loading" : ""}`}>
        <CocktailList cocktails={paginated} />
      </div>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
};
