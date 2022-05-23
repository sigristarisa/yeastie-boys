const Ingredient = ({ sourdough }) => {
  return (
    <section className="ingredient starter">
      <div className="portion-wrapper">
        <div className="icon">i</div>
        <p className="portion">{sourdough.starter} g</p>
      </div>
    </section>
  );
};

export default Ingredient;
