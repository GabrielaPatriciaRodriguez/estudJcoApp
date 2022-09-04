import React from "react";
import Footer from "../../Components/Footer/Footer";
import FrontPage from "../../Components/FrontPage/FrontPage";
import ItemDetailContainer from "../../Components/ItemDetailContainer/ItemDetailContainer";
import LinkWsp from "../../Components/LinkWsp/LinkWsp";
import Navigation from "../../Components/Navigation/Navigation";

const DetalleMateria = () => {
  return (
    <>
    <Navigation />
    <FrontPage />
    <LinkWsp />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ItemDetailContainer />
    </div>
    <Footer />
    </>
  );
};

export default DetalleMateria;