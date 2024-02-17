import React, { useState } from "react";
import styled from "styled-components";
import { dummyCadastrolist } from "./CRUD/TypeCadastro";

const CadastroItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  cursor: pointer;
  opacity: 0.5; /* Deixando o texto transparente */
`;

const Buttons = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

const Button = styled.input`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Button1 = () => {
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };

  const toggleAllButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };

  return (
    <div>
      <ButtonContainer>
        <button onClick={toggleAllButtons}>
        </button>
      </ButtonContainer>
      {dummyCadastrolist.map((cadastro, index) => (
        <CadastroItem key={cadastro.id}>
          <Icon onClick={toggleButtons}>Ícone</Icon>
          <Buttons visible={buttonsVisible}>
            <Button type="button" value="View"></Button>
            <Button type="button" value="Edit"></Button>
            <Button type="button" value="Delete"></Button>
            
          </Buttons>
        </CadastroItem>
      ))}
    </div>
  );
};

export default Button1;
