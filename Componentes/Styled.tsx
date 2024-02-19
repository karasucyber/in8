import styled, { css } from 'styled-components';

/* Definição da fonte */
const FontFace = css`
  @font-face {
    font-family: 'Helvetica 25 UltraLight Regular';
    src: url('HelveticaUltraLt_0.woff') format('woff');
  }

  @font-face {
    font-family: 'PS';
    src: url('ps.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto Light';
    src: url('Roboto-Light_0.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto Regular';
    src: url('Roboto-Regular_0.woff') format('woff');
  }
`;

/* Parte 1 */
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
    height: '640px',
    backgroundImage: `url('/index-image-mobile.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {
    height: '740px',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

export const ContainerTexto1 = styled.div`
  ${(theme) => FontFace}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 30%;
  font-size: 50px;
  font-family: 'Helvetica 25 UltraLight Regular', Arial, sans-serif;
  font-weight: 100;
  color: white;
  

  @media only screen and (max-width: 780px) {
    justify-content: center;
    width: 100%;
    height: 10%;
  }

  @media only screen and (min-width: 781px) and (max-width: 1024px) {
    /* Adicione estilos específicos para esta faixa de largura de tela, se necessário */
  }
  
`;

export const ContainerSubTexto1 = styled.div({
  width: "50 %",
  height: "0%",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
})


export const FraseEfeito = styled.h1(({ theme }) => ({
  fontSize: '100px',
  color: "white",
  fontWeight: 1,
  '@media only screen and (max-width: 780px)': {
    fontSize: "70px"
  },
}));

export const SubFraseEfeito = styled.h1({
  fontSize: '50px',
  fontWeight: '100',
  color: "white",
  '@media only screen and (max-width: 780px)': {
    fontSize: "30px"
  },
});

/* Parte 2 */
export const Container2 = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "700px",/* Mesma altura que a imagem possui */
  background: "#29abe2", /*Fundo proposto*/
  margin: "0px",
  padding: "0px",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const ContainerForm = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "10px",
  height: "400px",
  '@media only screen and (max-width: 780px)': {
   width: "100%"
  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {
    width: "100%"
  },
});

export const Label = styled.label({
  color: "white",
  fontSize: "10px",


});

export const Input = styled.input({
  width: "400px",
  background: "#29abe2",
  border: "none",
  color: "white",
  borderBottom: "1px solid ",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const ContainerButton = styled.div({
  display: "flex",
  justifyContent: "center",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const ButtonCadastro = styled.button`
  ${({ theme }) => FontFace};
  width: 400px;
  height: 80px;
  font-size: 55px;
  background: #012d51;
  color: #29abe2;
  font-family: 'Helvetica 25 UltraLight Regular', Arial, sans-serif;
`;

export const Titulo2 = styled.h1`
  ${({ theme }) => FontFace};
  font-size: 50px;
  font-family: 'Helvetica 25 UltraLight Regular', Arial, sans-serif;
  font-weight: 100;
  color: white;
`;



/* Parte 3 */
export const Container3 = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "700px",
  background: "",
  margin: "0px",
  padding: "0px",
  '@media only screen and (max-width: 780px)': {
    height: "400px",


  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {
    height: "700px",


  },
});




export const ContainerResponsivo1 = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const ContainerResponsivo2 = styled.div({
  width: "100%",
  margin: "auto", // Centralizando horizontalmente
  justifyContent: "flex-start",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const ContainerResponsivo3 = styled.div({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const InputN = styled.div({
  width: "90%",
  height: "15%",
  margin: "10px",
  padding: "2px",
  borderBottom: "1px solid #29abe2",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },


})


export const ContainerCadastrados = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "90%",
  maxWidth: "800px",
  maxHeight: "400px",
  margin: "0 auto",
  padding: "20px",
  overflow: "auto ",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const CadastroItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Icon = styled.span`
  cursor: pointer;
  opacity: 0.5; /* Deixando o texto transparente */
`;

export const Buttons = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

export const Button = styled.button({
  background: "url(topo-pag.svg)",
  borderRadius: "50px",
  width: "50px",
  height: "50px",
  border: "none",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const ButtonContainer = styled.div({
  position: "fixed",
  background: "red",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const ContainerTopo = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: "10%",
  width: "80%",
  '@media only screen and (max-width: 780px)': {

  },
  '@media only screen and (min-width: 781px) and (max-width: 1024px)': {

  },
});

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 2px solid #29abe2;
    padding: 8px;
    text-align: center;
  }

  tr:first-child th,
  tr:first-child td {
    border-top: none;
  }

  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }

  th:first-child,
  td:first-child {
    border-left: none;


`;
/*Footer*/

export const ContainerFoooter = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "334px", /* Mesma altura que a imagem possui */
  backgroundImage: `url('/rodape-desktop.jpg')`,
  margin: "0px",
  padding: "0px",
  flexDirection: "column",
  color: "white",
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
  display: "flex",
  justifyContent: "center",
  width: "100%",
})