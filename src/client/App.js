import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NameStarter from "./components/NameStarter/NameStarter";
import Calculator from "./components/Calculator/Calculator";
import Recipe from "./components/Recipe/Recipe";
import Journal from "./components/Journal/Journal";
import ViewDetail from "./components/Journal/ViewDetail";
import "../index.css";

const initialSourdough = {
  date: "",
  starterName: "",
  starter: "",
  water: "",
  salt: "",
  flour: "",
  doughweight: "",
  starterCondition: "",
  autolyseTime: "",
  bulkFermentationTime: "",
  stretchAndFold: "",
  shaping: "",
  proofing: "",
  bakeWithLid: "",
  bakeWithoutLid: "",
  ovenSpring: "",
  crust: "",
  crumb: "",
  taste: "",
  positive: "",
  negative: "",
  note: "",
};

const App = () => {
  const [sourdough, setSourdough] = useState(initialSourdough);
  const [sourdoughs, setSourdoughs] = useState([]);
  const [headerText, setHeaderText] = useState("Let's measure with");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <NameStarter sourdough={sourdough} setSourdough={setSourdough} />
          }
        />
        <Route
          path="/calculator"
          element={
            <Calculator
              sourdough={sourdough}
              setSourdough={setSourdough}
              headerText={headerText}
              setHeaderText={setHeaderText}
            />
          }
        />
        <Route
          path="/recipe"
          element={
            <Recipe
              sourdough={sourdough}
              setSourdough={setSourdough}
              headerText={headerText}
              setHeaderText={setHeaderText}
            />
          }
        />
        <Route
          path="/journal"
          element={
            <Journal
              sourdough={sourdough}
              setSourdough={setSourdough}
              sourdoughs={sourdoughs}
              setSourdoughs={setSourdoughs}
              headerText={headerText}
              setHeaderText={setHeaderText}
            />
          }
        />
        <Route path="/journal/:id" element={<ViewDetail />} />
      </Routes>
    </div>
  );
};

export default App;
