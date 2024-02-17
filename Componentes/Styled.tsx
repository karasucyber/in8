import { constrainedMemory } from "process";
import styled from "styled-components";
import IMAGEMPC from "../public/index-image.jpg";
export const Container1 = styled.div({
    display: "flex",
    justifyContent: "center",
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


/**/
export const Container2 = styled.div({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "940px",/* Mesma altura que a imagem possui */
    background: "#29abe2", /*Fundo proposto*/
    margin: "0px", 
    padding: "0px", 
})
/**/
export const Container3 = styled.div({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "700px",
    background: "",
    margin: "0px", 
    padding: "0px", 

})
/**/
export const ContainerFoooter = styled.div({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "334px", /* Mesma altura que a imagem possui */
    backgroundImage: `url('/rodape-desktop.jpg')`,
    margin: "0px", 
    padding: "0px", 

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
/**/
