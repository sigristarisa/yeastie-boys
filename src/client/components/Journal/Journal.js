import Header from "../Header/Header";
import EntryForm from "./EntryForm";
import EntryList from "./EntryList";
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

  return (
    <div>
      <Header
        sourdough={sourdough}
        headerText={headerText}
        setHeaderText={setHeaderText}
      />
      <main className="journal-wrapper">
        <EntryForm
          sourdough={sourdough}
          handleChange={handleChange}
          postRequest={postRequest}
        />
        <EntryList sourdoughs={sourdoughs} />
      </main>
    </div>
  );
};

export default Journal;
