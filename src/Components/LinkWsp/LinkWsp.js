import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const LinkWsp = () => {
  return (
    <>
      <span
        style={{
          position: "fixed",
          width: "auto",
          height: "auto",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <a href="https://wa.me/+5493756446393?text=¡Hola+Estudio+Juridico+Bravo+Salgado!+Quiero+hacer+una+consulta.">
          <WhatsAppIcon
            sx={{
              fontSize: 60,
              color: "#25D366",
              marginLeft: 3,
            }}
          />
        </a>
      </span>
    </>
  );
};

export default LinkWsp;
