import React from "react";
import Footer from "../../Components/Footer/Footer";
import FrontPage from "../../Components/FrontPage/FrontPage";
import LinkWsp from "../../Components/LinkWsp/LinkWsp";
import NavBar from "../../Components/Nav/NavBar";
import Nosotros from "../../Components/Nosotros/Nosotros";

const VistaNosotros = () => {
  return (
    <>
    <NavBar />
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