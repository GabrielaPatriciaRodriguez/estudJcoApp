import React from "react";
import "./App.css";

//Components
import Navigation from "./Components/Navigation/Navigation";
// import Contact from "./Components/Contact/Contact";
import FrontPage from "./Components/FrontPage/FrontPage";
import Nosotros from "./Components/Nosotros/Nosotros";
import Diferencia from "./Components/Diferencia/Diferencia";
import CardServicios from "./Components/CardServicios/CardServicios";
import Footer from "./Components/Footer/Footer";

//Views

function App() {
  return (
    <div className="App">
      {/* <Contact /> */}
      <Navigation />
      <FrontPage />
      <CardServicios />
      <Nosotros />
      <Diferencia />
      <Footer />
    </div>
  );
}

export default App;
