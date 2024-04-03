import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaCalculadora from "./pages/Calculadora";
import PaginaResultado from "./pages/Resultado";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaCalculadora />} />
        <Route path="/resultado" element={<PaginaResultado />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
