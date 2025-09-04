import { Link, NavLink } from "react-router";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink className="header-link" to="/">
          <h2>Home</h2>
        </NavLink>
        <Link className="header-link" to="/">
          <img src="/cocktail.svg" />
          <h1 className="h1 header-h1">Cocktails</h1>
          {/* <img src="/poster.png" /> */}
        </Link>

        <NavLink className="header-link" to="/search">
          <h2>Search</h2>
        </NavLink>
      </nav>
    </header>
  );
};
