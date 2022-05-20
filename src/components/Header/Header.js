import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="logo">YEASTIE BOYS</h1>
      <div className="header--btn-wrapper">
        <Link to="/calculator">
          <button>Calculator</button>
        </Link>
        <Link to="/recipe">
          <button>Recipe</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
