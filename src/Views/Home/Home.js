import React from "react";

import Navigation from "../../Components/Navigation/Navigation";
import FrontPage from "../../Components/FrontPage/FrontPage";
import CardList from "../../Components/CardList/CardList";
import Nosotros from "../../Components/Nosotros/Nosotros";
import Diferencia from "../../Components/Diferencia/Diferencia";
import Footer from "../../Components/Footer/Footer";
import LinkWsp from "../../Components/LinkWsp/LinkWsp";

const Home = () => {
  return (
    <div>
      <Navigation />
      <FrontPage />
      <LinkWsp />
      <CardList />
      <Nosotros />
      <Diferencia />
      <Footer />
    </div>
  );
};

export default Home;