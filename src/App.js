import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NameStarter from "./components/NameStarter/NameStarter";
import Calculator from "./components/Calculator/Calculator";
import Recipe from "./components/Recipe/Recipe";
import "./index.css";

const initialState = {
  starterName: "",
  starter: null,
  water: null,
  salt: null,
  flour: null,
  doughweight: null,
};

const App = () => {
  const [sourdough, setSourdough] = useState(initialState);

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
          element={<Calculator sourdough={sourdough} />}
        />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/journal" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default App;
