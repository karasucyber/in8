import { constrainedMemory } from "process";
import styled from "styled-components";
import IMAGEMPC from "../public/index-image.jpg";

/* Navbar */
export const NavbarContainer = styled.nav({
    color: '#fff',
    padding: '20px',
    width: "50%",
  });
  
  export const NavbarContent = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });
  
  export const NavbarTitle = styled.div({
    background: "url(logo-in8-dev.svg)",
    width: "171px",
    height: "40px",
  });
  
  export const NavbarMenu = styled.ul({
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  
    '@media (max-width: 768px)': {
  
    },
  });
  
  export const NavbarMenuItem = styled.li({
    marginRight: '20px',
  
    '@media (max-width: 768px)': {
      margin: '10px 0',
    },
  });
  
  export const NavbarLink = styled.a({
    color: '#fff',
    textDecoration: 'none',
  
    '&:hover': {
      textDecoration: 'underline',
    },
  });
  
  export const NavbarToggle = styled.button({
    display: 'none',
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  
  });
/* */
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
    borderBottom: "1px solid white" 
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
    maxHeight: "400px",
    margin: "0 auto",
    padding: "20px", 
    overflow: "auto ",

})

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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

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
 width:"50px",
 height: "50px",
 border: "none",
})
export const ButtonContainer = styled.div({
    position: "fixed",
    background: "red"
})


export const ContainerTopo = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
    height: "10%",
    width: "80%",
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
  }
`;
export const TabsContainer = styled.div`
  display: none; 
  @media (max-width: 780px) {
    display: block;
  }
`;

/*Geral*/
export const ContainerTitulo = styled.div({
 display: "flex",
    justifyContent: "center",  
    width: "100%",
})