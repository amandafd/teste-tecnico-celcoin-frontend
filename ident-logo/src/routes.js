import { BrowserRouter, Routes, Route } from "react-router-dom";
import CampoBusca from "./componentes/CampoBusca";
import MenuLateral from "./componentes/MenuLateral";
import Dashboard from "./paginas/Dashboard";
import Pacientes from "./paginas/Pacientes";

function AppRoutes() {
  return (

    <BrowserRouter>
      <MenuLateral />
      <CampoBusca />

      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="*" element={<div>Página não encontrada ou em manutenção...</div>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default AppRoutes;
