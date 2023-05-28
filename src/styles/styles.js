import { keyframes, styled } from 'styled-components'

const borderRadius = 5;
const radialGradient = (color1, color2, color3) => `background: radial-gradient( circle, ${color1}, ${color2}, ${color3});`

function bgColor (prop){
    switch (prop) {
        case "normal":
            return radialGradient("#A8A878", "#C6C6A7", "#E8E8C9")
        case "figthting":
            return radialGradient("#C03028", "#DA625D", "#F0847D")
        case "flying":
            return radialGradient("#A890F0", "#BAA9F0", "#D2C6F7")
        case "poison":
            return radialGradient( "#A040A0", "#C183C1", "#E0B6E0")
        case "ground":
            return radialGradient("#E0C068", "#EBD790", "#F5E6B2")
        case "rock":
            return radialGradient("#B8A038", "#D9C068", "#EFE3A7")
        case "ghost":
            return radialGradient("#705898", "#A094B7", "#C9C1DB")  
        case "bug":
            return radialGradient("#A8B820", "#C7D121", "#E0E584") 
        case "steel":
            return radialGradient("#B8B8D0", "#D1D1E0", "#E8E8F0")
        case "fire":
            return radialGradient("#F08030", "#FBB963", "#FFD2A1")
        case "water":
            return radialGradient("#6890F0", "#9DB7F5", "#C9DBFF")
        case "grass":
            return radialGradient("#78C850", "#A7DB8D", "#C6EFAC")
        case "electric":
            return radialGradient("#F8D030", "#FDEA93", "#FEF3C7")
        case "psychic":
            return radialGradient("#F85888", "#FBA7BB", "#FFD1DF")
        case "ice":
            return radialGradient("#98D8D8", "#B8F0F0", "#D0F7F7")
        case "dragon":
            return radialGradient("#7038F8", "#8F7CF6", "#ADA7F8")
        case "dark":
            return radialGradient("#705848", "#A29288", "#C7BFB8")
        case "fairy":
            return radialGradient("#F0B6BC", "#F9D3D6", "#FCEDEE")
        case "unknow":
            return radialGradient("#A8A878", "#C6C6A7", "#E8E8C9")
        case "shadow":
            return radialGradient("#333333", "#666666", "#999999")
        default:
            return radialGradient("#A8A878", "#C6C6A7", "#E8E8C9")
    }
}

const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
    }
}
`

const CardContainer = styled.div`
    background: #ecedef;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    border-radius: ${borderRadius}px;
    position: relative;
    text-align: center;
    box-shadow: -1px 15px 30px -12px #ffff;
    color: black;
    gap: 0px;
    border: 10px solid #f8e462;

    &:hover{
    transform: translateX(10px) scale(1.05);
    transition: all 0.3s ease;
    }
    `
const R_h2 = styled.h2`
    font-size: 24px;
    margin: 0;
    `
const Rh3 = styled.h3`
    text-align: center;
    margin: 30px;
    `
const CardImage = styled.div`
    border-top-left-radius: ${borderRadius}px;
    border-top-right-radius: ${borderRadius}px;
    width: 100%;
    `
const ContentText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 5px;
    flex-wrap: wrap;
    border: 1px solid;
    width: 92%;
    margin: 10px;
    border-radius: 3px;
    `
const Text = styled.p`
    color: "0000.7";
    font-weight: 700;
    margin: 0;
    `

const Container = styled.div`
    display: flex;
    `
const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #09f;

    animation: ${spin} 1s ease infinite;
    `
const ContainerWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin: 15px 0px;
    `
const ContentImage = styled(ContentText)`
      ${({type}) => bgColor(type) }
    `

export { CardContainer, Spinner, Container, Text, ContentText, CardImage, R_h2, Rh3, ContainerWrap, ContentImage }