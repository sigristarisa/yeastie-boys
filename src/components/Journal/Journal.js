import Header from "../Header/Header";
const Journal = ({ sourdough }) => {
  return (
    <div>
      <Header sourdough={sourdough} />
      <div className="journal-wrapper">
        <section>
          <form></form>
        </section>
      </div>
    </div>
  );
};

export default Journal;
