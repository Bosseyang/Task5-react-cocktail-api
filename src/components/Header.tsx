import { Link, NavLink } from "react-router";
import { IconButton } from "./buttons/IconButton";
import { useState } from "react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link className="header-link" to="/">
          <img alt="cocktail icon" src="/cocktail.svg" />
          <h1 className="h1 header-h1">Cocktails</h1>
          {/* <img src="/poster.png" /> */}
        </Link>
        <div className="desktop-nav">
          <NavLink className="header-link" to="/">
            <h2>Home</h2>
          </NavLink>
          <NavLink className="header-link" to="/search">
            <h2>Search</h2>
          </NavLink>
          <NavLink className="header-link" to="/favorites">
            <h2>Favorites</h2>
          </NavLink>
        </div>
        <div className="mobile-nav">
          <IconButton onClick={toggleMenu} icon={open ? "close" : "menu"} name="Menu" />
        </div>
      </nav>
      {open && (
        <div className="drop-down menu">
          <NavLink className="header-link" to="/" onClick={() => setOpen(false)}>
            <h2>Home</h2>
          </NavLink>
          <NavLink className="header-link" to="/search" onClick={() => setOpen(false)}>
            <h2>Search</h2>
          </NavLink>
          <NavLink className="header-link" to="/favorites" onClick={() => setOpen(false)}>
            <h2>Favorites</h2>
          </NavLink>
        </div>
      )}
    </header>
  );
};
