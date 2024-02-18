import { Container3, ContainerCadastrados, ContainerTitulo } from "./Styled";
import { TypeCadastro } from "./CRUD/TypeCadastro";
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

const Button = styled.button({
 background: "url(topo-pag.svg)",
 borderRadius: "50px",
 width:"50px",
 height: "50px",
 border: "none",
})
const ButtonContainer = styled.div({
    position: "fixed",
    background: "red"
})


const ContainerTopo = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
    height: "10%",
    width: "80%",
});


const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 2px solid #29abe2; /* Altera a cor da borda */
    padding: 8px;
    text-align: center;
  }

  /* Removendo a borda superior das células da primeira linha */
  tr:first-child th,
  tr:first-child td {
    border-top: none;
  }

  /* Removendo a borda inferior das células da última linha */
  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }

  /* Removendo a borda direita das células da última coluna */
  th:last-child,
  td:last-child {
    border-right: none;
  }

  /* Removendo a borda esquerda das células da primeira coluna */
  th:first-child,
  td:first-child {
    border-left: none;
  }
`;
const TabsContainer = styled.div`
  display: none; /* Inicialmente, as abas estarão ocultas */
  @media (max-width: 780px) {
    /* Quando a tela for menor que 780px, exiba as abas */
    display: block;
  }
`;


type Props = {
  list: TypeCadastro[]
  onDeleteClick: (data :TypeCadastro )=> void ;
}
const Parte3 = (props: Props) => {

  const onDeleteBTN = (data: TypeCadastro) => {

  }

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


