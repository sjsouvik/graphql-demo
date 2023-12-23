import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header className="navbar">
      <Link to="/">Shopsy</Link>
      <Link to="/add">Add product</Link>
    </header>
  );
};
