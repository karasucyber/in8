
'use client'
import { PageEnum, TypeCadastro, dummyCadastrolist } from '@/Componentes/CRUD/TypeCadastro';
import Footer from '@/Componentes/Footer';
import Parte1 from '@/Componentes/Parte1';
import Parte2 from '@/Componentes/Parte2';
import Parte3 from '@/Componentes/Parte3/Parte3';
import React, { useState } from 'react';
import styled from 'styled-components';

const Body = styled.div({
  margin: "0px", padding: "0px", boxSizing: "border-box"
})

export default function Home() {
  const [cadastroList, setCadastroList] = useState([] as TypeCadastro[]);
  const [shownPage, setShownPage] = useState('list'); 
  const addCadastro = (data: TypeCadastro) => {
    setCadastroList([...cadastroList, data]);
  }

  const DeleteCadastro = (data: TypeCadastro) => {
    const indexToDelete = cadastroList.indexOf(data);
    const tempList =  [...cadastroList]
    tempList.splice(indexToDelete,1);
    setCadastroList(tempList)
  }


  
  return (
    <Body>
      <Parte1 />
      {shownPage === 'list' && (
        <>
          <Parte2 onSumit={addCadastro} />
          <Parte3 list={cadastroList} onDeleteClick={DeleteCadastro} />
        </>
      )}
      {shownPage === 'add' && (
        <>
          <Parte2 onSumit={addCadastro} />
        </>
      )}
      <Footer/>
    </Body>
  );
}
