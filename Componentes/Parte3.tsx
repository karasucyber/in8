import React from "react";
import { Container3, ContainerCadastrados, ContainerTitulo } from "./Styled";
import { TypeCadastro } from "./CRUD/TypeCadastro";
 
type Props = {
    list: TypeCadastro[]
}

 const Parte3 = (props : Props ) => {
    const {list} = props;
 return(  
     <Container3>
        <ContainerTitulo>
        <h1> Lista de Cadastro </h1>
        </ContainerTitulo>
<ContainerCadastrados>
<table>
  <tr>
    <th></th>
    <th>Nome</th>
    <th>Email</th>
    <th>Nascimento</th>
    <th>Telefone</th>
  </tr>
  {list.map(cadastro =>{
    console.log(cadastro);
    return(<>
    <tr key={cadastro.id}>
    <td >{cadastro.contador}</td>
    <td >{cadastro.nome}</td>
    <td >{cadastro.email}</td>
    <td >{cadastro.dataNascimento}</td>
    <td >{cadastro.telefone}</td>
  </tr>
  </>)})}

</table>
</ContainerCadastrados>
</Container3>)

}

export default Parte3;