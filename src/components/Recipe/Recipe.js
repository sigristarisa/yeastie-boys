import { useState } from "react";
import Header from "../Header/Header";
import "./Recipe.css";

const initialChecked = {
  starter: false,
  water: false,
  salt: false,
  flour: false,
};

const initialSteps = {
  stepOne: 0.3,
  stepTwo: 0.3,
  stepThree: 0.3,
  stepFour: 0.3,
  stepFive: 0.3,
  stepSix: 0.3,
  stepSeven: 0.3,
  stepEight: 0.3,
  stepNine: 0.3,
};

const Recipe = ({ sourdough }) => {
  const [isChecked, setIsChecked] = useState(initialSteps);
  const [step, setStep] = useState(initialSteps);

  const displayFirstStep = (checked) => {
    const { starter, water, salt, flour } = checked;
    if (starter && water && salt && flour) setStep({ ...step, stepOne: 1 });
  };

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    const checkedIngredients = { ...isChecked, [name]: checked };
    setIsChecked(checkedIngredients);
    displayFirstStep(checkedIngredients);
  };

  return (
    <div>
      <Header sourdough={sourdough} />
      <div className="recipe-wrapper">
        <section className="ingredient-list-wrapper">
          <h2>Do you have the ingredients?</h2>
          <ul className="ingredient-list">
            <li>
              <input
                type="checkbox"
                name="starter"
                checked={isChecked.starter}
                onChange={handleChecked}
              />
              <p>Sourdough starter</p>
              <p className="portion-text">{sourdough.starter} g</p>
            </li>
            <li>
              <input
                type="checkbox"
                name="water"
                checked={isChecked.water}
                onChange={handleChecked}
              />
              <p>Water</p>
              <p className="portion-text">{sourdough.water} g</p>
            </li>
            <li>
              <input
                type="checkbox"
                name="salt"
                checked={isChecked.salt}
                onChange={handleChecked}
              />
              <p>Salt</p>
              <p className="portion-text">{sourdough.salt} g</p>
            </li>
            <li>
              <input
                type="checkbox"
                name="flour"
                checked={isChecked.flour}
                onChange={handleChecked}
              />
              <p>Flour</p>
              <p className="portion-text">{sourdough.flour} g</p>
            </li>
          </ul>
        </section>
        <section className="step-wrapper">
          <h2 style={{ opacity: `${step.stepOne}` }}>Your Next Steps</h2>
          <ul className="step-list">
            <li style={{ opacity: `${step.stepOne}` }}>
              <p>Mix all ingredients</p>
              <button>Done</button>
            </li>
            <li style={{ opacity: `${step.stepTwo}` }}>
              <p>Wait 30 minutes (autolyse)</p>
              <button>Done</button>
            </li>
            <li style={{ opacity: `${step.stepThree}` }}>
              <p>Stretch and fold every 15 minutes (total of 4 hours)</p>
              <button>Done</button>
            </li>
            <li style={{ opacity: `${step.stepFour}` }}>
              <p>Pre-shape the dough</p>
              <button>Done</button>
            </li>
            <li style={{ opacity: `${step.stepFive}` }}>
              <p>Wait 15 minutes</p>
              <button>Done</button>
            </li>
            <li style={{ opacity: `${step.stepSix}` }}>
              <p>Shape the dough </p>
              <button>Done</button>
            </li>
            <li style={{ opacity: `${step.stepSeven}` }}>
              <p>Proof the dough </p>
              <button>Done</button>
            </li>
            <li style={{ opacity: `${step.stepEight}` }}>
              <p>Proof the loaf (30 minutes) </p>
              <button>Done</button>
            </li>
            <li style={{ opacity: `${step.stepNine}` }}>
              <p>
                Bake the loaf <br></br>(20 minutes with lid, 20 minutes without
                lid){" "}
              </p>
              <button>Done</button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Recipe;
