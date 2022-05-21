import "./NameStarter.css";

const NameStarter = () => {
  return (
    <main className="name-starter">
      <div>
        <h1>
          Hello, there! <br></br> Name your sourdough starter:
        </h1>
        <div className="name-starter-input-wrapper">
          <input
            className="name-starter-input"
            type="text"
            name="starter-name"
          />
          <div className="name-starter-button-wrapper">
            <input type="submit" value="Go" />
            <input type="submit" value="Skip" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NameStarter;
