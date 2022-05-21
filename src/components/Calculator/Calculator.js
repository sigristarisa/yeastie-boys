import "./Calculator.css";
import Header from "../Header/Header";

const Calculator = ({ sourdough }) => {
  return (
    <main>
      <Header sourdough={sourdough} />
      <div className="calculator-wrapper">
        <div className="ingredients-wrapper">
          <section className="ingredient starter">
            starter
            <div className="portion-wrapper">
              <div className="icon">i</div>
              <p className="portion">350 g</p>
            </div>
          </section>
          <section className="ingredient water">
            water
            <div className="portion-wrapper">
              <img className="icon" src="/assets/water.png" alt="water" />
              <p className="portion">350 g</p>
            </div>
          </section>
          <section className="ingredient salt">
            salt
            <div className="portion-wrapper">
              <img className="icon" src="/assets/salt.png" alt="salt" />
              <p className="portion">350 g</p>
            </div>
          </section>
          <section className="ingredient flour">
            flour
            <div className="portion-wrapper">
              <img className="icon" src="/assets/flour.png" alt="flour" />
              <p className="portion">350 g</p>
            </div>
          </section>
        </div>
        <div className="doughweight-wrapper">
          <input type="number" name="doughweight" />
        </div>
      </div>
    </main>
  );
};

export default Calculator;
