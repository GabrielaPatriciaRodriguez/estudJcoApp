import React from "react";
import "../CardDiferencia/CardDiferencia.css";

const CardDiferencia = (props) => {
  return (
    <div className="CardDiferencia">
      <h4 style={{fontSize: 24, marginBottom: 0}}>{props.title}</h4>
      <hr className="hr"/>
      <p>
      {props.description}
      </p>
    </div>
  );
};

export default CardDiferencia;
