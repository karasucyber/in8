import React from "react";
import { Container3, ContainerCadastrados, ContainerTitulo } from "./Styled";
import { TypeCadastro } from "./CRUD/TypeCadastro";
import Button1 from "./Button";

type Props = {
    list: TypeCadastro[]
}


const Parte3 = (props : Props ) => {
    const { list } = props;

    return(  
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
                                  <Button1></Button1>
                            
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ContainerCadastrados>

        </Container3>
    );
}

export default Parte3;
