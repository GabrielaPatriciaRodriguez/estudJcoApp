import React from 'react';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const LinkWsp = () => {
  return (

    <div style={{ position: "fixed", width: "100%", display: "flex", justifyContent: "right"}}>
        <a href="https://wa.me/+5493756446393?text=¡Hola+Estudio+Juridico+Bravo+Salgado!+Quiero+hacer+una+consulta.">
        <WhatsAppIcon sx={{ fontSize: 60, color: "green", margin: 8 }}/>
        </a>
            
    </div>

  )
}

export default LinkWsp;