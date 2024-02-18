import React, { useState } from 'react';
import styled from 'styled-components';
import { NavbarContainer, NavbarContent,NavbarTitle,NavbarMenu,NavbarMenuItem,NavbarLink, NavbarToggle} from "./Styled"
import { FaBars } from 'react-icons/fa'; // Importando o ícone de hamburguer
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarTitle/>
        <NavbarToggle onClick={() => toggleMenu()}>
          <FaBars />
        </NavbarToggle>
        <NavbarMenu>
          <NavbarMenuItem>
            <NavbarLink href="#">Página Inicial</NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink href="#">Sobre</NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink href="#">Serviços</NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink href="#">Contato</NavbarLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
  