import "./Calculator.css";
import Header from "../Header/Header";

const Calculator = ({ sourdough, setSourdough }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSourdough({ ...sourdough, [name]: value });
  };

  const calculateWeight = (doughweight) => {
    const starterWeight = doughweight * 0.2;

    const flourWeight = (doughweight - starterWeight * 0.85) / 1.7;

    const waterWeight = flourWeight * 0.68 - (starterWeight * 0.32) / 2;

    const saltWeight = 0.02 * (flourWeight + starterWeight / 2);

    setSourdough({
      ...sourdough,
      starter: Math.round(starterWeight),
      water: Math.round(waterWeight),
      flour: Math.round(flourWeight),
      salt: Math.round(saltWeight),
    });
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
          <section className="ingredient starter">
            starter
            <div className="portion-wrapper">
              <div className="icon">i</div>
              <p className="portion">{sourdough.starter} g</p>
            </div>
          </section>
          <section className="ingredient water">
            water
            <div className="portion-wrapper">
              <img className="icon" src="/assets/water.png" alt="water" />
              <p className="portion">{sourdough.water} g</p>
            </div>
          </section>
          <section className="ingredient salt">
            salt
            <div className="portion-wrapper">
              <img className="icon" src="/assets/salt.png" alt="salt" />
              <p className="portion">{sourdough.salt} g</p>
            </div>
          </section>
          <section className="ingredient flour">
            flour
            <div className="portion-wrapper">
              <img className="icon" src="/assets/flour.png" alt="flour" />
              <p className="portion">{sourdough.flour} g</p>
            </div>
          </section>
        </div>
        <div className="calculator-footer">
          <div></div>
          <form className="doughweight-form" onSubmit={submitDoughweight}>
            <input
              id="doughweight"
              type="number"
              name="doughweight"
              placeholder={" doughweight ( g )"}
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
