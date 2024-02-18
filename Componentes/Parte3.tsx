import { Container3, ContainerCadastrados, ContainerTitulo } from "./Styled";
import { TypeCadastro } from "./CRUD/TypeCadastro";
import React, { useState } from "react";
import styled from "styled-components";
import { dummyCadastrolist } from "./CRUD/TypeCadastro";

type Props = {
    list: TypeCadastro[]
}

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


const Parte3 = (props: Props) => {
    const { list } = props;
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
                <table>
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
                                                    <input type="button" value="Edit"></input>
                                                    <input type="button" value="Delete"></input>
                                                </Buttons>
                                            </CadastroItem>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ContainerCadastrados>
            <ContainerTopo>
         <Button onClick={toggleAllButtons} />
        </ContainerTopo>
        </Container3>
       </>
    );
}

export default Parte3;



