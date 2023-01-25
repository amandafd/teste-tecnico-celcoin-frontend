/*import CampoBusca from './componentes/CampoBusca';
import Logo from './componentes/Logo';*/

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./paginas/Dashboard";
import Pacientes from "./paginas/Pacientes";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="" element={<Pacientes />} />
        <Route path="*" element={<div>Página não encontrada...</div>} />
      </Routes>
    </BrowserRouter>
  )
    /*<div className="App">
      <Logo />
      <CampoBusca />
    </div>*/
}

export default App;
