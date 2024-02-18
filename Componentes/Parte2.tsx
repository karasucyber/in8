import React, { useState } from "react";
import { Container2, ContainerForm, Label, Input,ButtonCadastro, Titulo2, ContainerButton } from "./Styled";
import { TypeCadastro } from "./CRUD/TypeCadastro";

type Props = {
  onSumit: (data: TypeCadastro) => void;
}
export const Parte2 = (props: Props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");

  const { onSumit } = props;

  const NameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  }
  const EmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const DataNacimentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataNascimento(e.target.value);
  }
  const TelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(e.target.value);
  }

  const onSumitBTN = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: TypeCadastro = {
      id: new Date().toJSON().toString(),
      nome: nome,
      email: email,
      dataNascimento: dataNascimento,
      telefone: telefone,
    }
    onSumit(data);
  }
  return (
    <Container2>
              <Titulo2>CADASTRO </Titulo2>
      <form onSubmit={onSumitBTN}>
        <ContainerForm>
        <Label>Nome </Label>
          <Input type="text" value={nome} onChange={NameChange}></Input>
          <Label>Email</Label>
          <Input type="email" value={email} onChange={EmailChange}></Input>
          <Label>Data nascimento</Label>
          <Input type="text" value={dataNascimento} onChange={DataNacimentoChange}></Input>
          <Label >Telefone</Label>
          <Input type="text" value={telefone} onChange={TelefoneChange}></Input>
        </ContainerForm>
        <ContainerButton>
        <ButtonCadastro type="submit" value="add">CADASTRAR</ButtonCadastro>
        </ContainerButton>
  
      </form>
    </Container2>
  )
}

export default Parte2;
