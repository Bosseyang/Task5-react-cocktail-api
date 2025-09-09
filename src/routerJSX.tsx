import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { App } from "./components/App";
import { LandingPage } from "./pages/LandingPage";
import { CocktailInfoPage } from "./pages/CocktailInfoPage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritesPage } from "./pages/FavoritesPage";

// Data router with JSX routes.
export const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />}>
        {/* <Route path=/> */}
      </Route>
      <Route path="/cocktail/:id" element={<CocktailInfoPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Route>
  )
);
