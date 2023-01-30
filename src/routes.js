import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./paginas/Dashboard";
import Pacientes from "./paginas/Pacientes";
import Logo from "./componentes/Logo";
import MenuLateral from "./componentes/MenuLateral";
import BarraSuperior from "./componentes/BarraSuperior";


function AppRoutes() {
  return (
    <BrowserRouter basename="/">
      <div className="appContainer">
        <div className="appLateral">
          <div className="appLogo">
            <Logo />
          </div>
          <hr className="appMenu" />
          <MenuLateral />
        </div>

        <div className="appQuadro">
          <div className="appBarra">
            <BarraSuperior />
          </div>
          <div className="appConteudo">
            <Routes>
              <Route path="" element={<Dashboard />} />
              <Route path="/pacientes" element={<Pacientes />} />
              <Route
                path="*"
                element={
                  <div className="appPagina">
                    Página não encontrada ou em manutenção...
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
