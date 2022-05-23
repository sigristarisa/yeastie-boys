import "./Calculator.css";
import Header from "../Header/Header";
import Ingredient from "../Calculator/Ingredient";
import CalculatorFooter from "../Calculator/CalculatorFooter";
import { useState } from "react";

const initialGoalHeight = {
  starter: 0,
  flour: 0,
  water: 0,
  salt: 0,
};

const Calculator = ({ sourdough, setSourdough, sourdoughs, setSourdoughs }) => {
  const [goalHeight, setGoalHeight] = useState(initialGoalHeight);

  const postRequest = (sourdough) => {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sourdough),
    };
    fetch(`http://localhost:3000/sourdoughs`, opts)
      .then((res) => res.json())
      .then((newSourdough) => setSourdoughs([...sourdoughs, newSourdough]));
  };

  const calculateGoalHeight = (
    doughweight,
    starterWeight,
    flourWeight,
    waterWeight,
    saltWeight
  ) => {
    const starterGoalHeight = (starterWeight / doughweight) * 100;
    const flourGoalHeight = (flourWeight / doughweight) * 100;
    const waterGoalHeight = (waterWeight / doughweight) * 100;
    const saltGoalHeight = (saltWeight / doughweight) * 100;

    setGoalHeight({
      ...goalHeight,
      starter: starterGoalHeight,
      flour: flourGoalHeight,
      water: waterGoalHeight,
      salt: saltGoalHeight,
    });
  };

  const calculateWeight = (doughweight) => {
    const starterWeight = doughweight * 0.2;
    const flourWeight = (doughweight - starterWeight * 0.85) / 1.7;
    const waterWeight = flourWeight * 0.68 - (starterWeight * 0.32) / 2;
    const saltWeight = 0.02 * (flourWeight + starterWeight / 2);

    calculateGoalHeight(
      doughweight,
      starterWeight,
      flourWeight,
      waterWeight,
      saltWeight
    );

    const newSourdough = {
      ...sourdough,
      starter: Math.round(starterWeight),
      water: Math.round(waterWeight),
      flour: Math.round(flourWeight),
      salt: Math.round(saltWeight),
    };

    setSourdough(newSourdough);
    postRequest(newSourdough);
  };

  return (
    <main>
      <Header sourdough={sourdough} />
      <div className="calculator-wrapper">
        <div className="ingredients-wrapper">
          <Ingredient
            ingredient={"starter"}
            sourdough={sourdough}
            goalHeight={goalHeight}
          />
          <Ingredient
            ingredient={"water"}
            sourdough={sourdough}
            goalHeight={goalHeight}
          />
          <Ingredient
            ingredient={"salt"}
            sourdough={sourdough}
            goalHeight={goalHeight}
          />
          <Ingredient
            ingredient={"flour"}
            sourdough={sourdough}
            goalHeight={goalHeight}
          />
        </div>
        <CalculatorFooter
          sourdough={sourdough}
          calculateWeight={calculateWeight}
          setSourdough={setSourdough}
        />
      </div>
    </main>
  );
};

export default Calculator;
