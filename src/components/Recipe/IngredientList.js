import { useState } from "react";
import IngredientListItem from "../Recipe/IngredientListItem";

const initialChecked = {
  starter: false,
  water: false,
  salt: false,
  flour: false,
};

const IngredientList = ({ sourdough, displayFirstStep }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    const checkedIngredients = { ...isChecked, [name]: checked };
    setIsChecked(checkedIngredients);
    displayFirstStep(checkedIngredients);
  };
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
