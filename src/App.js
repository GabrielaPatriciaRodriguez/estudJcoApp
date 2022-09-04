import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";
import DetalleMateria from "./Views/DetalleMateria/DetalleMateria";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<DetalleMateria />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
