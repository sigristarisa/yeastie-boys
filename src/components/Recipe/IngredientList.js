import IngredientListItem from "../Recipe/IngredientListItem";

const IngredientList = ({ isChecked, handleChecked, sourdough }) => {
  return (
    <section className="ingredient-list-wrapper">
      <h2>Do you have all the ingredients?</h2>
      <ul className="ingredient-list">
        <IngredientListItem
          ingredient={"starter"}
          isChecked={isChecked}
          handleChecked={handleChecked}
          sourdough={sourdough}
        />
        <IngredientListItem
          ingredient={"water"}
          isChecked={isChecked}
          handleChecked={handleChecked}
          sourdough={sourdough}
        />
        <IngredientListItem
          ingredient={"salt"}
          isChecked={isChecked}
          handleChecked={handleChecked}
          sourdough={sourdough}
        />
        <IngredientListItem
          ingredient={"flour"}
          isChecked={isChecked}
          handleChecked={handleChecked}
          sourdough={sourdough}
        />
      </ul>
    </section>
  );
};

export default IngredientList;
