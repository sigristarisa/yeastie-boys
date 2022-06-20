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
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sourdough),
    };

    fetch(`http://localhost:3030/sourdough`, opts)
      .then((res) => res.json())
      .then((data) => setSourdough(data.createdSourdough));

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
            required
          />
          <div className="name-starter-button-wrapper">
            <input type="submit" value="Go" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default NameStarter;
