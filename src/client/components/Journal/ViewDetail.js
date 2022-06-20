import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewDetail = () => {
  const [sourdough, setSourdough] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetSourdough = location.state.sourdough;
    setSourdough(targetSourdough);
  }, [location]);

  if (!sourdough) {
    return <p>Loading</p>;
  }

  return (
    <section className="detail-wrapper">
      <div className="content-wrapper">
        <label htmlFor="#date">Date</label>
        <p>{sourdough.date}</p>
      </div>
      <div className="ingredient-input-wrapper">
        <div className="ingredient-wrapper">
          <label htmlFor="#starter">Starter:</label>
          <p>{sourdough.starter}</p>
          <p>g</p>
        </div>
        <div className="ingredient-wrapper">
          <label htmlFor="#water">Water:</label>
          <p>{sourdough.water}</p>
          <p>g</p>
        </div>
        <div className="ingredient-wrapper">
          <label htmlFor="#salt">Salt:</label>
          <p>{sourdough.salt}</p>
          <p>g</p>
        </div>
        <div className="ingredient-wrapper">
          <label htmlFor="#flour">Flour:</label>
          <p>{sourdough.flour}</p>
          <p>g</p>
        </div>
      </div>
      <div className="content-wrapper">
        <label htmlFor="starterCondition">
          How was the starter's condition?
        </label>
        <p>{sourdough.starterCondition}</p>
      </div>
      <div className="content-wrapper">
        <label htmlFor="autolyseTime">How long was the autolyse?</label>
        <p>{sourdough.autolyseTime}</p>
      </div>
      <div className="content-wrapper">
        <label htmlFor="bulkFermentationTime">
          How long was the bulk fermentation?
        </label>
        <p>{sourdough.bulkFermentationTime}</p>
      </div>
      <div className="content-wrapper">
        <label htmlFor="stretchAndFold">
          How many sets of stretch and fold did you do?
        </label>
        <p>{sourdough.stretchAndFold}</p>
      </div>
      <div className="content-wrapper">
        <label htmlFor="shaping">
          Out of 1 to 5, how hard was the shaping?
        </label>
        <p>{sourdough.shaping}</p>
      </div>
      <div className="content-wrapper">
        <label htmlFor="proofing">How long was the proofing?</label>
        <p>{sourdough.proofing}</p>
      </div>
      <div className="content-wrapper">
        <label htmlFor="bakeWithLid">How long was the baking with lid?</label>
        <p>{sourdough.bakeWithLid}</p>
      </div>
      <div className="content-wrapper">
        <label htmlFor="bakeWithoutLid">
          How long was the baking without lid?
        </label>
        <p>{sourdough.bakeWithoutLid}</p>
      </div>

      <h3>Result</h3>
      <div className="content-wrapper">
        <label htmlFor="ovenSpring">
          Out of 1 to 5, how was the oven spring?
        </label>
        <p>{sourdough.ovenSpring}</p>
      </div>

      <div className="content-wrapper">
        <label htmlFor="crust">Out of 1 to 5, how was crust?</label>
        <p>{sourdough.crust}</p>
      </div>

      <div className="content-wrapper">
        <label htmlFor="crumb">Out of 1 to 5, how was the crumb?</label>
        <p>{sourdough.crumb}</p>
      </div>

      <div className="content-wrapper">
        <label htmlFor="taste">How was the taste?</label>
        <p>{sourdough.taste}</p>
      </div>

      <div className="content-wrapper">
        <label htmlFor="positive">What went well?</label>
        <p>{sourdough.positive}</p>
      </div>

      <div className="content-wrapper">
        <label htmlFor="negative">What can you change?</label>
        <p>{sourdough.negative}</p>
      </div>

      <div className="content-wrapper">
        <label htmlFor="note">Notes for next time</label>
        <p>{sourdough.note}</p>
      </div>

      <button onClick={() => navigate("/journal")}>Go Back</button>
    </section>
  );
};

export default ViewDetail;
