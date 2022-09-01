import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
