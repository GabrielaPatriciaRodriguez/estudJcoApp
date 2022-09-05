import React from "react";
import Diferencia from "../Diferencia/Diferencia";
import "../Nosotros/Nosotros.css";

const Nosotros = () => {
  return (
    <div className="Nosotros">
      <h2 style={{fontSize: 40 }}>Nosotros</h2>
      <p className="parrafoNosotros">
        Somos un estudio juridico multidisciplinario fundando en el año 2009 en la ciudad de 
        Gdor. Virasoro Provincia de Corrientes.
        Contamos con profesionales especializados en distintas areas del derecho, de
        contrastada experiencia.
        Trabajamos al máximo nivel de exigencia y motivación a la hora de tratar los 
        derechos e
        intereses de nuestros clientes, hasta el punto de convertirlos en
        objetivos propios. Nos comprometemos con ellos, nos hacemos partícipes
        de sus problemas jurídicos, personales y/o familiares, y finalmente
        construimos, a partir de nuestra experiencia, rigor y estudio, la
        solución más adecuada a su caso concreto. 
      </p>
      <Diferencia />
    </div>
  );
};

export default Nosotros;
