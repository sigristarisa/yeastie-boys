import { Routes, Route } from "react-router-dom";
import NameStarter from "./components/NameStarter/NameStarter";
import Calculator from "./components/Calculator/Calculator";
import Recipe from "./components/Recipe/Recipe";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NameStarter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/journal" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default App;
