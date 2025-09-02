import { Header } from "./components/Header";
import "./css/index.css";
import { Outlet } from "react-router";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
