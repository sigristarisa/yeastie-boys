const Ingredient = ({ ingredient, sourdough, goalHeight }) => {
  return (
    <section
      className={`ingredient ${ingredient}`}
      style={{ height: `${goalHeight[ingredient]}%` }}
    >
      <div className="portion-wrapper">
        <img
          className="icon"
          src={`/assets/${ingredient}.png`}
          alt={`${ingredient}`}
        />
        <p className="portion">{sourdough[ingredient]} g</p>
      </div>
    </section>
  );
};

export default Ingredient;
