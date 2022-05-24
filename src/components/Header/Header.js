import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ sourdough }) => {
  const [headerText, setHeaderText] = useState("Let's measure with");

  const changeHeaderText = (page) => {
    switch (page) {
      case "calculator":
        setHeaderText("Let's measure with");
        break;
      case "recipe":
        setHeaderText("Let's bake with");
        break;
      case "journal":
        setHeaderText("Let's log with");
        break;
      default:
        setHeaderText("");
    }
  };

  return (
    <header>
      <h1 className="logo">
        {headerText} {sourdough.starterName}
      </h1>
      <nav className="header--btn-wrapper">
        <Link to="/">
          <button>Name</button>
        </Link>
        <Link to="/calculator">
          <button onClick={() => changeHeaderText("calculator")}>
            Calculator
          </button>
        </Link>
        <Link to="/recipe">
          <button onClick={() => changeHeaderText("recipe")}>Recipe</button>
        </Link>
        <Link to="/journal">
          <button onClick={() => changeHeaderText("journal")}>Journal</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
