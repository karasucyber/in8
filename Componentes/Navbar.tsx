import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'; 

const NavbarContainer = styled.nav`
  color: #fff;
  padding: 20px;
  width: 50%;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarTitle = styled.div`
  background: url(logo-in8-dev.svg);
  width: 171px;
  height: 40px;
`;

const NavbarMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarMenuItem = styled.li`
  margin-right: 20px;
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavbarToggle = styled.button`
  display: none;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  padding: 10px;
  width: 100%;
`;

const DropdownMenuItem = styled.div`
  margin-bottom: 10px;
  background: blue;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarTitle/>
        <NavbarToggle onClick={toggleMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
      <DropdownMenu isOpen={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <DropdownMenuItem>
          <NavbarLink href="#">Página Inicial</NavbarLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavbarLink href="#">Sobre</NavbarLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavbarLink href="#">Serviços</NavbarLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavbarLink href="#">Contato</NavbarLink>
        </DropdownMenuItem>
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;
