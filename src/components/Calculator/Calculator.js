import "./Calculator.css";
import Header from "../Header/Header";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSourdough({ ...sourdough, [name]: value });
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

  const submitDoughweight = (e) => {
    e.preventDefault();
    calculateWeight(sourdough.doughweight);
  };

  return (
    <main>
      <Header sourdough={sourdough} />
      <div className="calculator-wrapper">
        <div className="ingredients-wrapper">
          <section
            className="ingredient starter"
            style={{ height: `${goalHeight.starter}%` }}
          >
            <div className="portion-wrapper">
              <img className="icon" src="/assets/starter.png" alt="starter" />
              <p className="portion">{sourdough.starter} g</p>
            </div>
          </section>
          <section
            className="ingredient water"
            style={{ height: `${goalHeight.water}%` }}
          >
            <div className="portion-wrapper">
              <img className="icon" src="/assets/water.png" alt="water" />
              <p className="portion">{sourdough.water} g</p>
            </div>
          </section>
          <section
            className="ingredient salt"
            style={{ height: `${goalHeight.salt}%` }}
          >
            <div className="portion-wrapper">
              <img className="icon" src="/assets/salt.png" alt="salt" />
              <p className="portion">{sourdough.salt} g</p>
            </div>
          </section>
          <section
            className="ingredient flour"
            style={{ height: `${goalHeight.flour}%` }}
          >
            <div className="portion-wrapper">
              <img className="icon" src="/assets/flour.png" alt="flour" />
              <p className="portion">{sourdough.flour} g</p>
            </div>
          </section>
        </div>
        <div className="calculator-footer">
          <div></div>
          <form className="doughweight-form" onSubmit={submitDoughweight}>
            <label htmlFor="#doughweight">Doughweight </label>
            <input
              id="doughweight"
              type="number"
              name="doughweight"
              placeholder={"e.g 700 ( g )"}
              value={sourdough.doughweight}
              onChange={handleChange}
            />
            <input id="doughweight-btn" type="submit" value="→" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
