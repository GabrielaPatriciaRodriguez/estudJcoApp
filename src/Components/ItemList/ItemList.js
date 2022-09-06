import React from "react";
import Item from "../Item/Item";

const ItemList = ({ materias }) => {
  return (
    <>
    {materias.map((materia) => (
        <Item key={materia.id} data={materia} />
      ))}
    </>
  );
};

export default ItemList;