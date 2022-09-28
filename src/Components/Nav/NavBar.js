import React from "react";
import Burger from "./Burger";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #002538;
  z-index: 14;
`;

const NavBar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default NavBar;
