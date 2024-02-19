import {
  Container3, ContainerCadastrados,
  ContainerTitulo,
  StyledTable, ButtonContainer, CadastroItem, Icon, Buttons, ContainerTopo, Button, ContainerResponsivo1, ContainerResponsivo2, ContainerResponsivo3, InputN
} from "../Styled";
import { TypeCadastro } from "../CRUD/TypeCadastro";
import React, { useState } from "react";
import { dummyCadastrolist } from "../CRUD/TypeCadastro";
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
        <Container3>
            <ContainerTitulo>
          <h1> Lista de Cadastro</h1>
     
        </ContainerTitulo>
 <ContainerResponsivo1>
 <Tabs style={{}}>
 <ContainerResponsivo3>
<ContainerResponsivo2>
                 <TabList>
              {list.map((cadastro, index) => (
                <Tab style={{borderRadius: 0}} key={index}>{index + 1}</Tab>
              ))}
            </TabList>
            </ContainerResponsivo2>
</ContainerResponsivo3>
            {list.map((cadastro, index) => (
<ContainerResponsivo3>
<ContainerResponsivo2>
               <TabPanel style={{border: "2px solid black", height: "200px", alignItems: "center", justifyItems: "center"}} key={index}>
                <InputN> <a>NOME</a> : <a>{cadastro.nome}</a></InputN>
                <InputN> <a>E-Mail</a> : <a>{cadastro.nome}</a></InputN>
                <InputN> <a>NASC</a> : <a>{cadastro.nome}</a></InputN>
                <InputN> <a>TEL</a>: <a>{cadastro.nome}</a></InputN>
              </TabPanel> 
     </ContainerResponsivo2>
</ContainerResponsivo3>))}
          </Tabs>
 </ContainerResponsivo1>
        </Container3>
            
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


