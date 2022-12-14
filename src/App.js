import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";
import DetalleMateria from "./Views/DetalleMateria/DetalleMateria";
import VistaNosotros from "./Views/VistaNosotros/VistaNosotros";
import Contacto from "./Views/Contacto/Contacto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<DetalleMateria />} />
          <Route path="/Nosotros" element={<VistaNosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
