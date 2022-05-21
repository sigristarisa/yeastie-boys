import "./Calculator.css";
import Header from "../Header/Header";

const Calculator = ({ sourdough, setSourdough }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSourdough({ ...sourdough, [name]: value });
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
        <div className="calculator-footer">
          <div></div>
          <form className="doughweight-form">
            <input
              id="doughweight"
              type="number"
              name="doughweight"
              placeholder={" doughweight ( g )"}
              value={sourdough.doughweight}
            />
            <input id="doughweight-btn" type="submit" value="→" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
