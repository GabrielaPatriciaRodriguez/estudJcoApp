import React from "react";

import Navigation from "../../Components/Navigation/Navigation";
import FrontPage from "../../Components/FrontPage/FrontPage";
import CardServicios from "../../Components/CardServicios/CardServicios";
import Nosotros from "../../Components/Nosotros/Nosotros";
import Diferencia from "../../Components/Diferencia/Diferencia";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <FrontPage />
      <CardServicios />
      <Nosotros />
      <Diferencia />
      <Footer />
    </div>
  );
};

export default Home;