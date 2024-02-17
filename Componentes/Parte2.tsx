import React, { useState } from "react";
import { Container2 } from "./Styled";
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
      <form onSubmit={onSumitBTN}>
        <div>
          <label>Nome </label>
          <input type="text" value={nome} onChange={NameChange}></input>
          <label>Email</label>
          <input type="email" value={email} onChange={EmailChange}></input>
          <label>Data nascimento</label>
          <input type="text" value={dataNascimento} onChange={DataNacimentoChange}></input>
          <label >Telefone</label>
          <input type="text" value={telefone} onChange={TelefoneChange}></input>
        </div>
        <div>
          <input type="submit" value="add"></input>
        </div>
      </form>
    </Container2>
  )
}

export default Parte2;
