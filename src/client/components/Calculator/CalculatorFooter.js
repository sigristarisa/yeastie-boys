const CalculatorFooter = ({ sourdough, calculateWeight, setSourdough }) => {
  const submitDoughweight = (e) => {
    e.preventDefault();
    calculateWeight(sourdough.doughweight);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSourdough({ ...sourdough, [name]: value });
  };

  return (
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
  );
};

export default CalculatorFooter;
