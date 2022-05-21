import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ sourdough }) => {
  return (
    <header>
      <h1 className="logo">Let's measure with {sourdough.starterName}</h1>
      <nav className="header--btn-wrapper">
        <Link to="/">
          <button>Name</button>
        </Link>
        <Link to="/calculator">
          <button>Calculator</button>
        </Link>
        <Link to="/recipe">
          <button>Recipe</button>
        </Link>
        <Link to="/journal">
          <button>Journal</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
