import React from "react";
import "../CardDiferencia/CardDiferencia.css";

const CardDiferencia = (props) => {
  return (
    <div className="CardDiferencia">
      <h4>{props.title}</h4>
      <hr />
      <p>
      {props.description}
      </p>
    </div>
  );
};

export default CardDiferencia;
