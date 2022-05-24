import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step from "../Recipe/Step";
import Modal from "../Recipe/Modal";

const StepList = ({ step, setStep, setSourdough, initialSteps }) => {
  const [showSave, setShowSave] = useState(false);
  const navigate = useNavigate();

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
          <p>
            Do you want to add this sourdough<br></br> in your journal?
          </p>
          <div className="save-btn-wrapper">
            <button className="no-btn" onClick={() => handleNoBtn()}>
              No
            </button>
            <button className="yes-btn " onClick={() => navigate("/journal")}>
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default StepList;
