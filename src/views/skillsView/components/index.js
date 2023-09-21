import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 0% 10%;

  @media (max-width: 995px) {
    display: grid;
    align-items: center;
    justify-content: center;
    padding-bottom: 10%;
  }
`;

export const TecnologiasSvg = styled.div`
  width: 35%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 10%;
  z-index: 10;
  @media (max-width: 995px) {
    position: static;
    margin: 10% 0;
  }
  @media (max-width: 995px) {
    margin: 20% 0;
  }
  @media (max-width: 555px) {
    margin: 30% 0;
  }
`;

export const CuboContainer = styled.div`
  width: 60%;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  @media (max-width: 995px) {
      width: 100%;
  }

  .cubo,
  .cubo .cara {
    height: 260px;
    width: 260px;
  }

  .cubo {
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(-30deg);
    margin: 200px auto;
  }

  .cubo .cara {
    position: absolute;
    border: 5px solid #000;
    opacity: 0.95;
    background-color: aliceblue;
  }

  /*Cara frontal*/

  .cubo .cara:nth-child(1) {
    transform: translateZ(130px);
  }
  /*Cara posterior*/

  .cubo .cara:nth-child(2) {
    transform: translateZ(-130px) rotateY(180deg);
  }
  /*Cara izquierda*/

  .cubo .cara:nth-child(3) {
    transform: translateX(-130px) rotateY(-90deg);
  }
  /*Cara derecha*/

  .cubo .cara:nth-child(4) {
    transform: translateX(130px) rotateY(90deg);
  }
  /*Cara superior*/

  .cubo .cara:nth-child(5) {
    transform: translateY(-130px) rotateX(90deg);
  }
  /*Cara inferior*/

  .cubo .cara:nth-child(6) {
    transform: translateY(130px) rotateX(-90deg);
  }
  @keyframes giro360 {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
  @keyframes giro {
    0% {
      transform: rotateX(-45deg) rotateY(0deg);
    }
    50% {
      transform: rotateX(45deg) rotateY(360deg);
    }
    100% {
      transform: rotateX(-45deg) rotateY(720deg);
    }
  }
  .cubo {
    animation: giro 20s infinite linear;
  }
  .Con-dado {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    @media (max-width: 995px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

  }
  }
  .Square {
    width: 65px;
    height: 65px;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 10%;
    padding: 8px;
    display:grid;
    place-items: center;
    transition: 0.3s;

   
  } 
  .Square:hover {
      transform: scale(1.3);
      transition: 0.6s;
    }
`;
