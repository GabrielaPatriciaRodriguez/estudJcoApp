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
      <div style={{height: "100%", display: "flex", alignContent: "space-around", justifyContent: "space-evenly"}}>
      <div>
        <img src='https://res.cloudinary.com/gabycoderhouse/image/upload/v1652345481/proyectoEstudio/assets/logosYColores/fondo_transparente_1_x6ay3y.png'
            alt='logo'
            style={{width: 300, height: 300, marginTop: -45}}/>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3521.0444299650744!2d-56.02283053493029!3d-28.05366798264974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-28.0540998!2d-56.0188692!4m5!1s0x945669bfd5393e69%3A0x4ff71a601146dd7e!2sEstudio%20Jur%C3%ADdico%20Bravo%20Salgado%20y%20Asoc.!3m2!1d-28.052799699999998!2d-56.0224604!5e0!3m2!1ses!2sar!4v1661954504154!5m2!1ses!2sar" style={{width: 400, height: 250}}></iframe> */}
        </div>
        <div className="contacto">
          <h3>CONTACTO</h3>
          <div>
            <a href="https://goo.gl/maps/8VrbHKM6R9h7VcEh9"><LocationOnIcon /></a>
            Av. Lavalle 291 Gdor. Virasoro Corrientes
          </div>
          <div>
          <a href="https://wa.me/+5493756446393?text=¡Hola+Estudio+Juridico+Bravo+Salgado!+Quiero+hacer+una+consulta.">
          <WhatsAppIcon />
          </a>Cel. 3756446393
          </div>
          
      
          <div>
          <a href="https://www.instagram.com/estudiojuridicobravosalgado/?hl=es" target="_blank">
            <InstagramIcon /></a>
            estudiojuridicobravosalgado
          </div>
          <div>
          <a href="mailto:hernanbravos@hotmail.com?subject=Mi consulta"><EmailIcon/></a>hernanbravos@hotmail.com
          </div>
        </div>
        
      </div>
      <div style={{ backgroundColor: "black", color: "whitesmoke" }}>
          <CopyrightIcon /> Bravo Salgado y Asoc.
          -Todos los derechos reservados-
      </div>
    </div>
  );
};

export default Footer;
