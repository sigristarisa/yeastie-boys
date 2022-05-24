import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NameStarter from "./components/NameStarter/NameStarter";
import Calculator from "./components/Calculator/Calculator";
import Recipe from "./components/Recipe/Recipe";
import Journal from "./components/Journal/Journal";
import "./index.css";

const initialSourdough = {
  starterName: "",
  starter: "",
  water: "",
  salt: "",
  flour: "",
  doughweight: "",
};

const App = () => {
  const [sourdough, setSourdough] = useState(initialSourdough);
  const [sourdoughs, setSourdoughs] = useState([]);

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
              sourdoughs={sourdoughs}
              setSourdoughs={setSourdoughs}
            />
          }
        />
        <Route
          path="/recipe"
          element={<Recipe sourdough={sourdough} setSourdough={setSourdough} />}
        />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </div>
  );
};

export default App;
