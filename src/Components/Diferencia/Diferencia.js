import React from "react";
import CardDiferencia from "../CardDiferencia/CardDiferencia";
import "../Diferencia/Diferencia.css";

const Diferencia = () => {
  return (
    <>
      <h2 style={{ color: "whitesmoke", fontSize: 40, paddingBottom: 50 }}>
        En nuestro Estudio Juridico encontrará
      </h2>
      <div className="Diferencia">
        <CardDiferencia
          title="Atencion Personalizada"
          description="El Abogado que lleve su caso responderá todas sus llamadas, ningún cliente
        es más o menos importante. Nuestros abogados brindan atención personalizada a cada uno
        de ellos."
        />
        <CardDiferencia
          title="Informacion"
          description="Su abogado no solo le dirá lo que tiene que hacer sino que le instruirá para 
          que pueda tomar una decisión sobre cómo quiere enfocar su caso."
        />
        <CardDiferencia
          title="Persistencia"
          description="Nuestros abogados buscarán todas las vías posibles para conseguir sus objetivos."
        />
        <CardDiferencia
          title="Disponibilidad"
          description="Nuestros abogados se ponen a disposición de nuestros clientes en cualquier 
          momento, usted está en un momento delicado y sus dudas no deberían tener que esperar."
        />
        <CardDiferencia
          title="Lealtad"
          description="En Bravo Salgado y Asoc. no permitiremos que se desanime, estaremos
           a su lado durante todo el proceso."
        />
        <CardDiferencia
          title="Experiencia"
          description="Mas de 10 años al servicio de numerosos clientes avalan nuestra experiencia."
        />
      </div>
    </>
  );
};

export default Diferencia;
