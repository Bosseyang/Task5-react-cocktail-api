import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routerJSX } from "./app/router.tsx";
import "./css/index.css";
import { FavoriteContextProvider } from "./app/context/FavoriteContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <FavoriteContextProvider>
    <RouterProvider router={routerJSX} />
  </FavoriteContextProvider>
  // <StrictMode>
  //   <App />
  // </StrictMode>
);
