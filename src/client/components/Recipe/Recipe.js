import { useState } from "react";
import Header from "../Header/Header";
import IngredientList from "../Recipe/IngredientList";
import StepList from "../Recipe/StepList";
import "./Recipe.css";

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

const Recipe = ({ sourdough, setSourdough, headerText, setHeaderText }) => {
  const [step, setStep] = useState(initialSteps);

  const displayFirstStep = (checked) => {
    const { starter, water, salt, flour } = checked;
    if (starter && water && salt && flour) setStep({ ...step, stepOne: 1 });
  };

  return (
    <div>
      <Header
        sourdough={sourdough}
        headerText={headerText}
        setHeaderText={setHeaderText}
      />
      <div className="recipe-wrapper">
        <IngredientList
          sourdough={sourdough}
          displayFirstStep={displayFirstStep}
        />
        <StepList
          step={step}
          setStep={setStep}
          setSourdough={setSourdough}
          initialSteps={initialSteps}
          setHeaderText={setHeaderText}
        />
      </div>
    </div>
  );
};

export default Recipe;
