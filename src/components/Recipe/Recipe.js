import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import IngredientList from "../Recipe/IngredientList";
import Step from "../Recipe/Step";
import Modal from "../Recipe/Modal";
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

const Recipe = ({ sourdough, setSourdough }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const [step, setStep] = useState(initialSteps);
  const [showSave, setShowSave] = useState(false);
  const navigate = useNavigate();

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
    stepNum
      ? setStep({ ...step, [stepNum]: 1 })
      : setStep(initialSteps) || setShowSave(true);
  };

  const handleNoBtn = () => {
    setSourdough("");
    navigate("/");
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
            <Step
              step={step}
              stepNum={"stepOne"}
              nextStepNum={"stepTwo"}
              handleDone={handleDone}
              stepText={"Mix all ingredients"}
            />
            <Step
              step={step}
              stepNum={"stepTwo"}
              nextStepNum={"stepThree"}
              handleDone={handleDone}
              stepText={"Wait 30 minutes (autolyse)"}
            />
            <Step
              step={step}
              stepNum={"stepThree"}
              nextStepNum={"stepFour"}
              handleDone={handleDone}
              stepText={"Stretch and fold every 15 minutes (total of 4 hours)"}
            />

            <Step
              step={step}
              stepNum={"stepFour"}
              nextStepNum={"stepFive"}
              handleDone={handleDone}
              stepText={"Pre-shape the dough"}
            />

            <Step
              step={step}
              stepNum={"stepFive"}
              nextStepNum={"stepSix"}
              handleDone={handleDone}
              stepText={"Wait 15 minutes"}
            />

            <Step
              step={step}
              stepNum={"stepSix"}
              nextStepNum={"stepSeven"}
              handleDone={handleDone}
              stepText={"Shape the dough"}
            />
            <Step
              step={step}
              stepNum={"stepSeven"}
              nextStepNum={"stepEight"}
              handleDone={handleDone}
              stepText={"Proof the loaf (30 minutes)"}
            />
            <Step
              step={step}
              stepNum={"stepEight"}
              nextStepNum={"stepNine"}
              handleDone={handleDone}
              stepText={"Bake the loaf with lid (20 minutes)"}
            />
            <Step
              step={step}
              stepNum={"stepNine"}
              nextStepNum={null}
              handleDone={handleDone}
              stepText={"Bake the loaf without lid (20 minutes)"}
            />
          </ul>
          <Modal showSave={showSave}>
            <div className="save-wrapper">
              <h2>Done!</h2>
              <p>Do you want to add this sourdough in your journal?</p>
              <div className="save-btn-wrapper">
                <button className="no-btn" onClick={() => handleNoBtn()}>
                  No
                </button>
                <button
                  className="yes-btn "
                  onClick={() => navigate("/journal")}
                >
                  Yes
                </button>
              </div>
            </div>
          </Modal>
        </section>
      </div>
    </div>
  );
};

export default Recipe;
