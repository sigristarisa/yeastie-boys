import { useState } from "react";
import Header from "../Header/Header";
import IngredientList from "../Recipe/IngredientList";
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
  const [isChecked, setIsChecked] = useState(initialChecked);
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

  const handleDone = (stepNum) => {
    setStep({ ...step, [stepNum]: 1 });
  };

  return (
    <div>
      <Header sourdough={sourdough} />
      <div className="recipe-wrapper">
        <IngredientList
          isChecked={isChecked}
          handleChecked={handleChecked}
          sourdough={sourdough}
        />

        <section className="step-wrapper">
          <h2 style={{ opacity: `${step.stepOne}` }}>Your Next Steps</h2>
          <ul className="step-list">
            <li style={{ opacity: `${step.stepOne}` }}>
              <p>Mix all ingredients</p>
              <button onClick={() => handleDone("stepTwo")}>Done</button>
            </li>
            <li style={{ opacity: `${step.stepTwo}` }}>
              <p>Wait 30 minutes (autolyse)</p>
              <button onClick={() => handleDone("stepThree")}>Done</button>
            </li>
            <li style={{ opacity: `${step.stepThree}` }}>
              <p>Stretch and fold every 15 minutes (total of 4 hours)</p>
              <button onClick={() => handleDone("stepFour")}>Done</button>
            </li>
            <li style={{ opacity: `${step.stepFour}` }}>
              <p>Pre-shape the dough</p>
              <button onClick={() => handleDone("stepFive")}>Done</button>
            </li>
            <li style={{ opacity: `${step.stepFive}` }}>
              <p>Wait 15 minutes</p>
              <button onClick={() => handleDone("stepSix")}>Done</button>
            </li>
            <li style={{ opacity: `${step.stepSix}` }}>
              <p>Shape the dough </p>
              <button onClick={() => handleDone("stepSeven")}>Done</button>
            </li>
            <li style={{ opacity: `${step.stepSeven}` }}>
              <p>Proof the dough </p>
              <button onClick={() => handleDone("stepEight")}>Done</button>
            </li>
            <li style={{ opacity: `${step.stepEight}` }}>
              <p>Proof the loaf (30 minutes) </p>
              <button onClick={() => handleDone("stepNine")}>Done</button>
            </li>
            <li style={{ opacity: `${step.stepNine}` }}>
              <p>
                Bake the loaf <br></br>(20 minutes with lid, 20 minutes without
                lid){" "}
              </p>
              <button>Finish</button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Recipe;
