import React from "react";
import Footer from "../../Components/Footer/Footer";
import FrontPage from "../../Components/FrontPage/FrontPage";
import LinkWsp from "../../Components/LinkWsp/LinkWsp";
import Navigation from "../../Components/Navigation/Navigation";
import Nosotros from "../../Components/Nosotros/Nosotros";

const VistaNosotros = () => {
  return (
    <>
    <Navigation />
    <FrontPage />
    <LinkWsp />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Nosotros />
    </div>
    <Footer />
    </>
  );
};

export default VistaNosotros;