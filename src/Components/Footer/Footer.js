import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div style={{height: 300, backgroundColor: '#A4A5A6', display: "flex", flexDirection: "column"}}>
        <h3>CONTACTO</h3>
        <p><LocationOnIcon />Av. Lavalle 291 Gdor. Virasoro Corrientes</p>
        <p><WhatsAppIcon />Tel. 3756446393</p>
        <p><InstagramIcon />Instagram</p>
        <p><EmailIcon />Correo Electronico</p>
        <div style={{backgroundColor: "black", color: "whitesmoke"}}>
        <p><CopyrightIcon />Bravo Salgado y Asoc. -Todos los derechos reservados-</p>
        </div>
    </div>
  )
}

export default Footer;