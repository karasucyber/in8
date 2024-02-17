import React, { useState } from "react";
import {Container2} from "./Styled";
import { TypeCadastro, dummyCadastrolist } from "./CRUD/TypeCadastro";
 
export const Parte2 = () => {
  const [CadastroList, setCadastrolist] = useState(dummyCadastrolist as TypeCadastro[]);
    return(
      <Container2>
        <h1> Cadastro </h1>

      </Container2>
    )
}

export default Parte2;