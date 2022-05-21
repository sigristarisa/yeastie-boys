import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ sourdough }) => {
  return (
    <header>
      <h1 className="logo">{sourdough.starterName}</h1>
      <div className="header--btn-wrapper">
        <Link to="/">
          <button>Home</button>
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
      </div>
    </header>
  );
};

export default Header;
