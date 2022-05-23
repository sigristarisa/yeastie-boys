const IngredientListItem = ({
  ingredient,
  isChecked,
  handleChecked,
  sourdough,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        name={ingredient}
        checked={isChecked[ingredient]}
        onChange={handleChecked}
      />
      <p>{ingredient}</p>
      <p className="portion-text">{sourdough[ingredient]} g</p>
    </li>
  );
};

export default IngredientListItem;
