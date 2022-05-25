import { Link } from "react-router-dom";

const EntryList = ({ sourdoughs }) => {
  return (
    <section className="entry-wrapper">
      <ul className="entry-list">
        {sourdoughs.map((sourdough, index) => {
          return (
            <li key={index}>
              <p>{sourdough.date}</p>
              <Link to={`/journal/${sourdough.id}`} state={{ sourdough }}>
                <button>See Details</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default EntryList;
