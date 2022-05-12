import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">YEASTIE BOYS</h1>
      <div className="header--btn-wrapper">
        <button>Calculator</button>
        <button>Recipe</button>
      </div>
    </header>
  );
};

export default Header;
