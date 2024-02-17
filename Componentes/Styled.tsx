import { constrainedMemory } from "process";
import styled from "styled-components";
import IMAGEMPC from "../public/index-image.jpg";


/* Parte1*/
export const Container1 = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "940px",
    backgroundImage: `url('/index-image.jpg')`,
    margin: "0px", 
    padding: "0px", 


    '@media only screen and (max-width: 780px)': {
        height: '640px', // Ajuste a altura para dispositivos móveis
        backgroundImage: `url('/index-image-mobile.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    '@media only screen and (min-width: 781px) and (max-width: 1024px)': {
        height: '740px', // Ajuste a altura para tablets
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
});

export const ContainerTexto1 = styled.div({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width:"50%",
    height: "30%",
}) 

export const ContainerSubTexto1 = styled.div({
    width:"50 %",
    height: "0%",
}) 


import { css } from 'styled-components';

export const FraseEfeito = styled.h1(({ theme }) => ({
    fontFamily: 'Helvetica UltraLight, sans-serif',
    fontSize: '100px',
    fontWeight: '100', 
    color: "white",
  }));
  
  export const SubFraseEfeito = styled.h1({
    fontFamily: 'Helvetica UltraLight, sans-serif',
    fontSize: '50px',
    fontWeight: '100', 
    color: "white",
  });
/*Parte2*/
export const Container2 = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "700px",/* Mesma altura que a imagem possui */
    background: "#29abe2", /*Fundo proposto*/
    margin: "0px", 
    padding: "0px", 
})

export const ContainerForm = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "flex-start", 
    gap: "10px",
    height: "400px"
  });

export const Label = styled.label({
    color: "white",
    fontSize: "10px"
})

export const Input = styled.input({
    width: "500px",
    background: "#29abe2",
    border: "none",
    color: "white",
    borderBottom: "1px solid white" // Adiciona uma borda preta na parte inferior
})

export const ContainerButton = styled.div({
    display: "flex",
    justifyContent: "center", 
})

export const ButtonCadastro = styled.button({
    width: "300px",
    height: "70px",
    fontSize: "50px",
    background: "#012d51",
    color: "#29abe2"
})

export const Titulo2 = styled.h1({
    fontSize: "50px"
})

/* */
/*Parte3*/
export const Container3 = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "700px",
    background: "",
    margin: "0px", 
    padding: "0px", 
})

export const ContainerCadastrados = styled.div({
    display: "flex",
    justifyContent: "center",  
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px"
})

/*Footer*/
export const ContainerFoooter = styled.div({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "334px", /* Mesma altura que a imagem possui */
    backgroundImage: `url('/rodape-desktop.jpg')`,
    margin: "0px", 
    padding: "0px", 
    flexDirection: "column",
    '@media only screen and (max-width: 780px)': {
        height: '334px', // Ajuste a altura para dispositivos móveis
        backgroundImage: `url('/rodape-mobile.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    '@media only screen and (min-width: 781px) and (max-width: 1024px)': {
        height: '334px', // Ajuste a altura para tablets

    },
})
/*Geral*/
export const ContainerTitulo = styled.div({



    
})