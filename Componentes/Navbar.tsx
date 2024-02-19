import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'; 
import { useMediaQuery } from "@react-hook/media-query";

const NavbarContainer = styled.nav`
  color: #fff;
  padding: 20px;
  width: 50%;
  height: 10px;
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


const NavbarHambu1 = styled.div`
  background: url(hamburguer-aberto0.svg);
  width: 30px;
  height: 25px;
`;
const NavbarHambu2 = styled.div`
  background: url(hamburguer.svg);
  width: 30px;
  height: 25px;
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
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-bottom: 10px;
  width: 2000px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  padding: 10px;
  width: 30%;
  height: 30%;

`;

const DropdownMenuItem = styled.div`
  margin-bottom: 10px;
  width: 2000px;
  height: 50px
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobileDevice = useMediaQuery("(max-width: 1000px)");

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
        {isMobileDevice ? (
          <>
            <NavbarToggle onClick={toggleMenu}>
             <NavbarHambu2></NavbarHambu2>
            </NavbarToggle>
            <NavbarTitle />
          </>
        ) : (
          <>
            <NavbarTitle />
            <NavbarToggle onClick={toggleMenu}>
            </NavbarToggle>
          </>
        )}
        <NavbarMenu>
      
          <NavbarMenuItem>
            <NavbarLink href="#">cadastro</NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink href="#">lista</NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink href="#">sobre mim</NavbarLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
      <DropdownMenu isOpen={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownMenuItem >
      <NavbarToggle onClick={toggleMenu}>
            <NavbarHambu1></NavbarHambu1>
            </NavbarToggle>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavbarLink href="#">cadastro</NavbarLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavbarLink href="#">lista</NavbarLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavbarLink href="#">sobre mim</NavbarLink>
        </DropdownMenuItem>
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;
