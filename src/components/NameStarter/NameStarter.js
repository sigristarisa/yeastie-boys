import "./NameStarter.css";
import { useNavigate } from "react-router-dom";

const NameStarter = ({ sourdough, setSourdough }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSourdough({ ...sourdough, [name]: value });
  };
  const submitName = (e) => {
    e.preventDefault();
    console.log(sourdough);
    setSourdough(sourdough);
    navigate("/calculator");
  };

  return (
    <main className="name-starter">
      <div>
        <h1>
          Hello, there! <br></br>What's the name of your sourdough starter?
        </h1>
        <form className="name-starter-input-form" onSubmit={submitName}>
          <input
            className="name-starter-input"
            type="text"
            name="starterName"
            value={sourdough.starterName}
            onChange={handleChange}
          />
          <div className="name-starter-button-wrapper">
            <input type="submit" value="Go" />
            {/* <input type="submit" value="Skip" /> */}
          </div>
        </form>
      </div>
    </main>
  );
};

export default NameStarter;
