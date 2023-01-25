import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuLateral from "./componentes/MenuLateral";
import Dashboard from "./paginas/Dashboard";
import Pacientes from "./paginas/Pacientes";

function App() {
  return (
    <BrowserRouter>
      <MenuLateral />

      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="*" element={<div>Página não encontrada...</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
