import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routerJSX } from "./routerJSX.tsx";
import "./css/index.css";
import { Favorites } from "./components/features/favorites/Favorites.tsx";
import { FavoriteContextProvider } from "./components/features/favorites/context/FavoriteContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <FavoriteContextProvider>
    <RouterProvider router={routerJSX} />
  </FavoriteContextProvider>
  // <StrictMode>
  //   <App />
  // </StrictMode>
);
