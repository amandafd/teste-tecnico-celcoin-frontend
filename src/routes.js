import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./componentes/Logo";
import MenuLateral from "./componentes/MenuLateral";
import Dashboard from "./paginas/Dashboard";
import Pacientes from "./paginas/Pacientes";
import BarraSuperior from "./componentes/BarraSuperior";
import './App.css';


function AppRoutes() {
  return (
    <BrowserRouter basename="/">
      <div className="container">

        <div className="divLateral">
          <Logo />
          <hr />
          <MenuLateral className="principal__menuLateral"/>
        </div>
          
        
        <div className="container__conteudo">
          <BarraSuperior />
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
