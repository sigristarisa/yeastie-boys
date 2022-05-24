import Header from "../Header/Header";
import { useEffect } from "react";
import "../Journal/Journal.css";

const Journal = ({
  sourdough,
  setSourdough,
  sourdoughs,
  setSourdoughs,
  headerText,
  setHeaderText,
}) => {
  useEffect(() => {
    fetch("http://localhost:3000/sourdoughs")
      .then((res) => res.json())
      .then((sourdoughData) => setSourdoughs(sourdoughData));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSourdough({ ...sourdough, [name]: value });
  };

  const postRequest = () => {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sourdough),
    };
    fetch(`http://localhost:3000/sourdoughs`, opts)
      .then((res) => res.json())
      .then((newSourdough) => setSourdoughs([...sourdoughs, newSourdough]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest();
  };

  return (
    <div>
      <Header
        sourdough={sourdough}
        headerText={headerText}
        setHeaderText={setHeaderText}
      />
      <main className="journal-wrapper">
        <section className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="#date">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={sourdough.date}
                onChange={handleChange}
              />
            </div>
            <div className="ingredient-input-wrapper">
              <div className="ingredient-wrapper">
                <label htmlFor="#starter">Starter:</label>
                <input
                  id="starter"
                  name="starter"
                  type="number"
                  value={sourdough.starter}
                />
                <p>g</p>
              </div>
              <div className="ingredient-wrapper">
                <label htmlFor="#water">Water:</label>
                <input
                  id="water"
                  name="water"
                  type="number"
                  value={sourdough.water}
                />
                <p>g</p>
              </div>
              <div className="ingredient-wrapper">
                <label htmlFor="#salt">Salt:</label>
                <input
                  id="salt"
                  name="salt"
                  type="number"
                  value={sourdough.salt}
                />
                <p>g</p>
              </div>
              <div className="ingredient-wrapper">
                <label htmlFor="#flour">Flour:</label>
                <input
                  id="flour"
                  name="flour"
                  type="number"
                  value={sourdough.flour}
                />
                <p>g</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="starterCondition">
                How was the starter's condition?
              </label>
              <input
                id="starterCondition"
                name="starterCondition"
                type="text"
                value={sourdough.starterCondition}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="autolyseTime">How long was the autolyse?</label>
              <input
                id="autolyseTime"
                name="autolyseTime"
                type="text"
                value={sourdough.autolyseTime}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="bulkFermentationTime">
                How long was the bulk fermentation?
              </label>
              <input
                id="bulkFermentationTime"
                name="bulkFermentationTime"
                type="text"
                value={sourdough.bulkFermentationTime}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="stretchAndFold">
                How many sets of stretch and fold did you do?
              </label>
              <input
                id="stretchAndFold"
                name="stretchAndFold"
                type="number"
                value={sourdough.stretchAndFold}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="shaping">
                Out of 1 to 5, how hard was the shaping?
              </label>
              <div className="radio-wrapper">
                <p>Easy</p>
                <div>
                  <input
                    id="shaping-one"
                    name="shaping"
                    type="radio"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="shaping-one">1</label>
                </div>
                <div>
                  <input
                    id="shaping-two"
                    name="shaping"
                    type="radio"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="shaping-two">2</label>
                </div>
                <div>
                  <input
                    id="shaping-three"
                    name="shaping"
                    type="radio"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="shaping-three">3</label>
                </div>
                <div>
                  <input
                    id="shaping-four"
                    name="shaping"
                    type="radio"
                    value="4"
                    onChange={handleChange}
                  />
                  <label htmlFor="shaping-four">4</label>
                </div>
                <div>
                  <input
                    id="shaping-five"
                    name="shaping"
                    type="radio"
                    value="5"
                    onChange={handleChange}
                  />
                  <label htmlFor="shaping-five">5</label>
                </div>
                <p>Hard</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="proofing">How long was the proofing?</label>
              <input
                id="proofing"
                name="proofing"
                type="text"
                value={sourdough.proofing}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="bakeWithLid">
                How long was the baking with lid?
              </label>
              <input
                id="bakeWithLid"
                name="bakeWithLid"
                type="text"
                value={sourdough.bakeWithLid}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="bakeWithoutLid">
                How long was the baking without lid?
              </label>
              <input
                id="bakeWithoutLid"
                name="bakeWithoutLid"
                type="text"
                value={sourdough.bakeWithoutLid}
                onChange={handleChange}
              />
            </div>

            <h3>Result</h3>
            <div className="input-wrapper">
              <label htmlFor="ovenSpring">
                Out of 1 to 5, how was the oven spring?
              </label>
              <div className="radio-wrapper">
                <p>Short</p>
                <div>
                  <input
                    id="ovenSpring-one"
                    name="ovenSpring"
                    type="radio"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="#ovenSpring-one">1</label>
                </div>
                <div>
                  <input
                    id="ovenSpring-two"
                    name="ovenSpring"
                    type="radio"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="#ovenSpring-two">2</label>
                </div>
                <div>
                  <input
                    id="ovenSpring-three"
                    name="ovenSpring"
                    type="radio"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="#ovenSpring-three">3</label>
                </div>
                <div>
                  <input
                    id="ovenSpring-four"
                    name="ovenSpring"
                    type="radio"
                    value="4"
                    onChange={handleChange}
                  />
                  <label htmlFor="#ovenSpring-four">4</label>
                </div>
                <div>
                  <input
                    id="ovenSpring-five"
                    name="ovenSpring"
                    type="radio"
                    value="5"
                    onChange={handleChange}
                  />
                  <label htmlFor="#ovenSpring-five">5</label>
                </div>
                <p>Tall</p>
              </div>
            </div>

            <div className="input-wrapper">
              <label htmlFor="crust">Out of 1 to 5, how was crust?</label>
              <div className="radio-wrapper">
                <p>Pale</p>
                <div>
                  <input
                    id="crust-one"
                    name="crust"
                    type="radio"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="crust-one">1</label>
                </div>
                <div>
                  <input
                    id="crust-two"
                    name="crust"
                    type="radio"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="crust-two">2</label>
                </div>
                <div>
                  <input
                    id="crust-three"
                    name="crust"
                    type="radio"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="crust-three">3</label>
                </div>
                <div>
                  <input
                    id="crust-four"
                    name="crust"
                    type="radio"
                    value="4"
                    onChange={handleChange}
                  />
                  <label htmlFor="crust-four">4</label>
                </div>
                <div>
                  <input
                    id="crust-five"
                    name="crust"
                    type="radio"
                    value="5"
                    onChange={handleChange}
                  />
                  <label htmlFor="crust-five">5</label>
                </div>
                <p>Dark</p>
              </div>
            </div>

            <div className="radio-input-wrapper">
              <label htmlFor="crumb">Out of 1 to 5, how was the crumb?</label>
              <div className="radio-wrapper">
                <p>Soft</p>
                <div>
                  <input
                    id="crumb-one"
                    name="crumb"
                    type="radio"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="crumb-one">1</label>
                </div>
                <div>
                  <input
                    id="crumb-two"
                    name="crumb"
                    type="radio"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="crumb-two">2</label>
                </div>
                <div>
                  <input
                    id="crumb-three"
                    name="crumb"
                    type="radio"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="crumb-three">3</label>
                </div>
                <div>
                  <input
                    id="crumb-four"
                    name="crumb"
                    type="radio"
                    value="4"
                    onChange={handleChange}
                  />
                  <label htmlFor="crumb-four">4</label>
                </div>
                <div>
                  <input
                    id="crumb-five"
                    name="crumb"
                    type="radio"
                    value="5"
                    onChange={handleChange}
                  />
                  <label htmlFor="crumb-five">5</label>
                </div>
                <p>Crunchy</p>
              </div>
            </div>

            <div className="input-wrapper">
              <label htmlFor="taste">How was the taste?</label>
              <input
                id="taste"
                name="taste"
                type="text"
                value={sourdough.taste}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="positive">What went well?</label>
              <input
                id="positive"
                name="positive"
                type="text"
                value={sourdough.positive}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="negative">What can you change?</label>
              <input
                id="negative"
                name="negative"
                type="text"
                value={sourdough.negative}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="note">Notes for next time</label>
              <input
                id="note"
                name="note"
                type="text"
                value={sourdough.note}
                onChange={handleChange}
              />
            </div>
            <input type="submit" className="submit-btn" />
          </form>
        </section>
        <section className="entry-wrapper">
          <ul>
            {sourdoughs.map((sourdough, index) => {
              return <li key={index}> {sourdough.date}</li>;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Journal;
