import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'; // Importando o ícone de hamburguer

const NavbarContainer = styled.nav({
  color: '#fff',
  padding: '20px',
  width: "50%",
});

const NavbarContent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const NavbarTitle = styled.div({
  background: "url(logo-in8-dev.svg)",
  width: "171px",
  height: "40px",
});

const NavbarMenu = styled.ul({
  listStyleType: 'none',
  margin: '0',
  padding: '0',
  display: 'flex',
  alignItems: 'center',

  '@media (max-width: 768px)': {

  },
});

const NavbarMenuItem = styled.li({
  marginRight: '20px',

  '@media (max-width: 768px)': {
    margin: '10px 0',
  },
});

const NavbarLink = styled.a({
  color: '#fff',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});

const NavbarToggle = styled.button({
  display: 'none',
  backgroundColor: 'transparent',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',

});

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
