import {
  Container3, ContainerCadastrados,
  ContainerTitulo,
  StyledTable, ButtonContainer, CadastroItem, Icon, Buttons, ContainerTopo, Button
} from "./Styled";
import { TypeCadastro } from "./CRUD/TypeCadastro";
import React, { useState } from "react";
import { dummyCadastrolist } from "./CRUD/TypeCadastro";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Importando o estilo básico das abas
import { useMediaQuery } from "@react-hook/media-query";

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

  const isMobileDevice = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {isMobileDevice ? (
            <Tabs>
                 <TabList>
              {list.map((cadastro, index) => (
                <Tab key={index}>{index + 1}</Tab>
              ))}
            </TabList>
            {list.map((cadastro, index) => (
              <TabPanel key={index}>
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Nascimento</th>
                      <th>Telefone</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{cadastro.nome}</td>
                      <td>{cadastro.email}</td>
                      <td>{cadastro.dataNascimento}</td>
                      <td>{cadastro.telefone}</td>
                      <td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
            ))}
          </Tabs>
      ) : (
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
      )}
    </div>
  );
};
export default Parte3;


