import {
  Container3, ContainerCadastrados,
  ContainerTitulo,
  StyledTable, ButtonContainer, CadastroItem, Icon, Buttons, ContainerTopo, Button, ContainerResponsivo1, ContainerResponsivo2, ContainerResponsivo3, InputN, Titulo2, Th, Td, Td1, A1,A2
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

  const isMobileDevice = useMediaQuery("(max-width: 780px)");

  return (
    <div>
      {isMobileDevice ? (
        <Container3>
            <ContainerTitulo>
            <Titulo2 style={{color: "#42ABE2", width: "200px",}}> LISTA DE CADASTRO </Titulo2>
     
        </ContainerTitulo>
 <ContainerResponsivo1>
 <Tabs style={{}}>
 <ContainerResponsivo3>
<ContainerResponsivo2>
                 <TabList style={{width: "350px"}}>
              {list.map((cadastro, index) => (
                <Tab  style={{borderRadius: 0,padding: "15px"  }} key={index}>{index + 1}</Tab>
              ))}
            </TabList>
            </ContainerResponsivo2>
</ContainerResponsivo3>
            {list.map((cadastro, index) => (
<ContainerResponsivo2>
               <TabPanel style={{border: "2px solid#29abe2 ", height: "200px", alignItems: "center", justifyItems: "center", width: "100%",}} key={index}>
                <InputN> <A1>NOME</A1> : <A2>{cadastro.nome}</A2></InputN>
                <InputN> <A1>E-Mail</A1> : <A2>{cadastro.email}</A2></InputN>
                <InputN> <A1>NASC</A1> : <A2>{cadastro.dataNascimento}</A2></InputN>
                <InputN> <A1>TEL</A1>: <A2>{cadastro.telefone}</A2></InputN>
              </TabPanel> 
     </ContainerResponsivo2>
))}
          </Tabs>
 </ContainerResponsivo1>
        </Container3>
            
      ) : (
        <Container3>
        <ContainerTitulo>
        <Titulo2 style={{color: "#42ABE2"}}> LISTA DE CADASTRO </Titulo2>
        </ContainerTitulo>
        <ContainerCadastrados>
          <StyledTable>
            <thead>
              <tr>
                <th></th>
                <Th>Nome </Th>
                <Th>Email</Th>
                <Th>Nascimento</Th>
                <Th>Telefone</Th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.map((cadastro, index) => (
                <tr key={cadastro.id}>
                  <Td1 >{index + 1}</Td1> {/* Sinalizando a posição na lista */}
                  <Td>{cadastro.nome}</Td>
                  <Td>{cadastro.email}</Td>
                  <Td>{cadastro.dataNascimento}</Td>
                  <Td>{cadastro.telefone}</Td>
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


