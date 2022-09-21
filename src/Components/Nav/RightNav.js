import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";


const Ul = styled.ul`
  list-style: none;
  display: flex;
  lex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: #f1f1f1;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #002538;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};
    transition: transform 0.3s ease-in-out;
    z-index: 15;

    li {
      color: #f1f1f1;
    }
  }`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to={`/`} style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <li>Servicios</li>
        </Link>
        <Link to={`/Nosotros`} style={{ textDecoration: "none" }}>
          <li>Nosotros</li>
        </Link>
        <Link to={`/Contacto`} style={{ textDecoration: "none" }}>
          <li>Contacto</li>
        </Link>
    </Ul>
  );
};

export default RightNav;
