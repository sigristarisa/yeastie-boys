const Step = ({ step, stepNum, nextStepNum, handleDone, stepText }) => {
  return (
    <li style={{ opacity: `${step[stepNum]}` }}>
      <p>{stepText}</p>
      <button onClick={() => handleDone(nextStepNum)}>Done</button>
    </li>
  );
};

export default Step;
