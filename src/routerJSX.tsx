import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { App } from "./App";
import { LandingPage } from "./pages/LandingPage";
import { CocktailInfoPage } from "./pages/CocktailInfoPage";
import { SearchPage } from "./pages/SearchPage";

// Data router with object routes.
// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { index: true, element: <HomeView /> },
//       { path: ':pokemonName', element: <PokemonView /> },
//     ],
//   },
// ]);

// Data router with JSX routes.
export const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<HomeView />} />
      <Route path=":pokemonName" element={<PokemonView />} /> */}
      <Route index element={<LandingPage />}>
        {/* <Route path=/> */}
      </Route>
      <Route path="/cocktail/:id" element={<CocktailInfoPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Route>
  )
);
