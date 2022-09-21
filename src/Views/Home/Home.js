import React from "react";

import FrontPage from "../../Components/FrontPage/FrontPage";
import CardList from "../../Components/CardList/CardList";
import Nosotros from "../../Components/Nosotros/Nosotros";
import Footer from "../../Components/Footer/Footer";
import LinkWsp from "../../Components/LinkWsp/LinkWsp";
import NavBar from "../../Components/Nav/NavBar";


const Home = () => {
  return (
    <div>
      <NavBar />
      <FrontPage />
      <LinkWsp />
      <CardList />
      <Nosotros />
      <Footer />
    </div>
  );
};

export default Home;