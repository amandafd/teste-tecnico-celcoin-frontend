import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuLateral from "./componentes/MenuLateral";
import Dashboard from "./paginas/Dashboard";
import Pacientes from "./paginas/Pacientes";
import './App.css';

function AppRoutes() {
  return (
    
    <BrowserRouter>
      <div className="container">
        <MenuLateral />
        <div className="container__conteudo">
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="*" element={<div>Página não encontrada ou em manutenção...</div>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default AppRoutes;
