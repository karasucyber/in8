'use client'
import Footer from '@/Componentes/Footer';
import Parte1 from '@/Componentes/Parte1';
import Parte2 from '@/Componentes/Parte2';
import Parte3 from '@/Componentes/Parte3';
import React from 'react';
import styled from 'styled-components';

const Body = styled.div({
  margin: "0px", padding: "0px", boxSizing: "border-box"
})

export default function Home() {
  return (
    <>
      <Parte1/>
      <Parte2/>
      <Parte3/>
      <Footer/>
    </>    
  );
}
