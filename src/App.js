import React from 'react';
import './App.css';

//Components
import Navigation from './Components/Navigation/Navigation';
import Contact from './Components/Contact/Contact';
import FrontPage from './Components/FrontPage/FrontPage';
import CardFront from './Components/CardFront/CardFront';

//Views

function App() {
  return (
    <div className="App">
      <Contact />
      <Navigation />
      <FrontPage />
      <div style={{display: "flex", justifyContent: "center"}}>
      <CardFront 
      image="https://res.cloudinary.com/gabycoderhouse/image/upload/v1636804061/proyectoEstudio/assets/tinified/formulario_j2atvi.jpg"
      title="Derecho de Familia" 
      description="Alimentos, Cuidado Personal, Regimen de visitas..." />
      <CardFront
      image="https://res.cloudinary.com/gabycoderhouse/image/upload/v1636804064/proyectoEstudio/assets/tinified/trabajadora_kuijol.jpg" 
      title="Derecho Laboral" 
      description="Despidos, calculo de Indemnizaciones, Correcta registracion, Telegramas Laborales..."/>
      <CardFront 
      image="https://res.cloudinary.com/gabycoderhouse/image/upload/v1636804062/proyectoEstudio/assets/tinified/jubilaciones_zaupuz.jpg"
      title="Derecho Previsional" 
      description="Jubilaciones y pensiones ante Anses e IPS..."/>
      <CardFront 
      image="https://res.cloudinary.com/gabycoderhouse/image/upload/v1636804063/proyectoEstudio/assets/tinified/principal3_tafks9.jpg"
      title="Derecho Penal" 
      description="Defensas penales, asesoramiento integral..."/>
      </div>
     
    </div>
  );
}

export default App;
