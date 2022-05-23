import Header from "../Header/Header";
import "./Recipe.css";

const Recipe = ({ sourdough }) => {
  return (
    <div>
      <Header sourdough={sourdough} />
      <div className="recipe-wrapper">
        <section className="ingredient-list-wrapper">
          <h2>Do you have the ingredients?</h2>
          <ul className="ingredient-list">
            <li>
              <input type="checkbox" />
              <p>Sourdough starter</p>
              <p className="portion-text">{sourdough.starter} g</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Water</p>
              <p className="portion-text">{sourdough.water} g</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Salt</p>
              <p className="portion-text">{sourdough.salt} g</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Flour</p>
              <p className="portion-text">{sourdough.flour} g</p>
            </li>
          </ul>
        </section>
        <section className="step-wrapper">steps</section>
      </div>
    </div>
  );
};

export default Recipe;
