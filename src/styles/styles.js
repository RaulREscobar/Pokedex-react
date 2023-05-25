import { keyframes, styled } from 'styled-components'


const borderRadius = 14;
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
    background: white;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: ${borderRadius + 5}px;
    position: relative;
    text-align: center;
    box-shadow: -1px 15px 30px -12px #ffff;
    color: black;
    gap: 0px;
    min-height: 440px;

    &:hover{
    transform: translateX(10px) scale(1.05);
    transition: all 0.3s ease;
    }
    `
const R_h2 = styled.h2`
    font-size: 24px;
    padding: 10px 10px 0 10px;
    `
const Rh3 = styled.h3`
    text-align: center;
    margin: 30px;
    `

const CardImage = styled.div`
    margin-bottom: 35px;
    border-top-left-radius: ${borderRadius}px;
    border-top-right-radius: ${borderRadius}px;
    `
const ContentText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    flex-wrap: wrap;
`
const Text = styled.p`
    color: "0000.7";
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

export { CardContainer, Spinner, Container, Text, ContentText, CardImage, R_h2, Rh3, ContainerWrap }