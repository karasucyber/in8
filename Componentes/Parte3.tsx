import {
  Container3, ContainerCadastrados,
  ContainerTitulo,
  StyledTable, ButtonContainer, CadastroItem, Icon, Buttons, ContainerTopo, Button
} from "./Styled";
import { TypeCadastro } from "./CRUD/TypeCadastro";
import React, { useState } from "react";
import { dummyCadastrolist } from "./CRUD/TypeCadastro";
type Props = {
  list: TypeCadastro[]
  onDeleteClick: (data: TypeCadastro) => void;
}
const Parte3 = (props: Props) => {
  const { list, onDeleteClick } = props;
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };
  const toggleAllButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };
  return (
    <>
      <Container3>
        <ContainerTitulo>
          <h1> Lista de Cadastro </h1>
        </ContainerTitulo>
        <ContainerCadastrados>
          <StyledTable>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Nascimento</th>
                <th>Telefone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.map((cadastro, index) => (
                <tr key={cadastro.id}>
                  <td>{index + 1}</td> {/* Sinalizando a posição na lista */}
                  <td>{cadastro.nome}</td>
                  <td>{cadastro.email}</td>
                  <td>{cadastro.dataNascimento}</td>
                  <td>{cadastro.telefone}</td>
                  <td>
                    <div>
                      <ButtonContainer>
                        <button onClick={toggleAllButtons}>
                        </button>
                      </ButtonContainer>
                      {dummyCadastrolist.map((cadastro, index) => (
                        <CadastroItem key={cadastro.id}>
                          <Icon onClick={toggleButtons}></Icon>
                          <Buttons visible={buttonsVisible}>
                            <input type="button" value="Delete" onClick={() => onDeleteClick(cadastro)}></input>
                          </Buttons>
                        </CadastroItem>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </ContainerCadastrados>
        <ContainerTopo>
          <Button onClick={toggleAllButtons} />
        </ContainerTopo>
      </Container3>
    </>
  );
}

export default Parte3;


