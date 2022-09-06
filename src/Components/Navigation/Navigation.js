import React from 'react';
import "./Navigation.css";


import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='Navigation'>
        <ul>
            <Link to={`/`} style={{ textDecoration: "none"}}><li>Home</li></Link>
            <Link to={`/`} style={{ textDecoration: "none"}}><li>Servicios</li></Link>
            <Link to={`/Nosotros`} style={{ textDecoration: "none"}}><li>Nosotros</li></Link>
            <li>Contacto</li>
        </ul>
    </div>
  )
}

export default Navigation;