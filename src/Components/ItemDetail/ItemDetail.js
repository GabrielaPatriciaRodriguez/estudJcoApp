import React from "react";

const ItemDetail = ({
  titulo,
  imagen,
  descripcion,
  informacion
}) => {

  return (
    <div>
      <div>
        <h2 style={{color: "whitesmoke", fontSize: 40 }}>{titulo}</h2>
        
      </div>
      <div style={{fontSize: 20, lineHeight: 2, color: "whitesmoke", display: "flex", justifyContent: "center", padding: 16}}>
        <p> {informacion} </p>
      </div>
    </div>
  );
};

export default ItemDetail;
