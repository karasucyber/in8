import React from "react";
import { Container1, ContainerSubTexto1,  ContainerTexto1,  FraseEfeito, SubFraseEfeito } from "./Styled";
import Navbar from "./Navbar";


export const Parte1 = () => {


  return(
<Container1>
  <Navbar/>
  <ContainerTexto1>
      <ContainerSubTexto1>
      <FraseEfeito>Crud</FraseEfeito>
      <SubFraseEfeito>Cadastro Typescript + React  + <br/> Styled + Next</SubFraseEfeito>
      </ContainerSubTexto1>
  </ContainerTexto1>
</Container1>

  
  )
}

export default Parte1;