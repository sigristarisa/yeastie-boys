import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ sourdough, headerText, setHeaderText }) => {
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
          <button onClick={() => setHeaderText("Let's measure with")}>
            Calculator
          </button>
        </Link>
        <Link to="/recipe">
          <button onClick={() => setHeaderText("Let's bake with")}>
            Recipe
          </button>
        </Link>
        <Link to="/journal">
          <button onClick={() => setHeaderText("Let's log with")}>
            Journal
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
