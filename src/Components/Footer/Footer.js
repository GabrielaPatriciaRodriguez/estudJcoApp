import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#A4A5A6",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignContent: "space-around",
          justifyContent: "space-evenly",
          lineHeight: 1,
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/gabycoderhouse/image/upload/v1652345481/proyectoEstudio/assets/logosYColores/fondo_transparente_1_x6ay3y.png"
            alt="logo"
            style={{ width: 300, height: 300, marginTop: -45 }}
          />
        </div>
        <div className="contacto">
          <h3>CONTACTO</h3>
          <div className="contactoIconos">
            <a href="https://goo.gl/maps/8VrbHKM6R9h7VcEh9">
              <LocationOnIcon style={{ paddingRight: 10, color: "black" }} />
            </a>
            <p>Av. Lavalle 291 Gdor. Virasoro Corrientes</p>
          </div>
          <div className="contactoIconos">
            <a href="https://wa.me/+5493756446393?text=¡Hola+Estudio+Juridico+Bravo+Salgado!+Quiero+hacer+una+consulta.">
              <WhatsAppIcon style={{ paddingRight: 10, color: "black" }} />
            </a>
            <p>Cel. 3756446393</p>
          </div>

          <div className="contactoIconos">
            <a
              href="https://www.instagram.com/estudiojuridicobravosalgado/?hl=es"
              target="_blank"
            >
              <InstagramIcon style={{ paddingRight: 10, color: "black" }} />
            </a>
            <p>estudiojuridicobravosalgado</p>
          </div>
          <div className="contactoIconos">
            <a href="mailto:hernanbravos@hotmail.com?subject=Mi consulta">
              <EmailIcon style={{ paddingRight: 10, color: "black" }} />
            </a>
            <p>hernanbravos@hotmail.com</p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "whitesmoke",
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CopyrightIcon style={{ paddingRight: 10 }} />
        <p style={{ fontSize: 14 }}>
          Bravo Salgado y Asoc. -Todos los derechos reservados-
        </p>
      </div>
    </div>
  );
};

export default Footer;
