import { Link } from "react-router";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link className="header-link" to="/">
        <img src="/cocktail.svg" />
        <h1 className="h1 header-h1">Cocktails</h1>
      </Link>
      <nav className="header-nav">
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};
