import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routerJSX } from "./routerJSX.tsx";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routerJSX} />
  // <StrictMode>
  //   <App />
  // </StrictMode>
);
