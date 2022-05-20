import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Recipe from "./components/Recipe/Recipe";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default App;
