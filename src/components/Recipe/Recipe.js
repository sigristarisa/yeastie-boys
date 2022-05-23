import Header from "../Header/Header";

const Recipe = ({ sourdough }) => {
  return (
    <div>
      <Header sourdough={sourdough} />
      Recipe section
    </div>
  );
};

export default Recipe;
