import React from "react";
import "../CardDiferencia/CardDiferencia.css";

const CardDiferencia = (props) => {
  return (
    <div className="CardDiferencia">
      <h4 style={{ fontSize: 24, marginBottom: 10 }}>{props.title}</h4>
      <hr className="hr" />
      <p className="parrafoDiferencia">{props.description}</p>
    </div>
  );
};

export default CardDiferencia;
