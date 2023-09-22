import { styled } from "styled-components";

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
    transform: rotateX(0deg) rotateY(0deg);
    margin: 200px auto;
  }
  .cubo:hover {
    transform: rotateX(0deg) rotateY(180deg);
  }

  .cubo .cara {
    position: absolute;
    border: 1px solid #000;
    opacity: 0.98;
    background-color: white;
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
  .cubo {
    animation: giro360 5s infinite linear;
  }

  @keyframes giro360 {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
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

  .circulo {
    display: block;
    position: absolute;
    box-shadow: 0 0 5px white;
    width: 30px;
    height: 30px;
    background: #000;
    border-radius: 15px;
  }
  .front .circulo1 {
    top: 105px;
    left: 105px;
  }
  .back .circulo1 {
    top: 25px;
    left: 25px;
  }
  .back .circulo2 {
    top: 190px;
    left: 190px;
  }
  .right .circulo1 {
    top: 25px;
    left: 25px;
  }
  .right .circulo2 {
    top: 105px;
    left: 105px;
  }
  .right .circulo3 {
    top: 190px;
    left: 190px;
  }
  .left .circulo1 {
    top: 25px;
    left: 25px;
  }
  .left .circulo2 {
    top: 25px;
    left: 190px;
  }
  .left .circulo3 {
    top: 190px;
    left: 25px;
  }
  .left .circulo4 {
    top: 190px;
    left: 190px;
  }
  .top .circulo1 {
    top: 25px;
    left: 25px;
  }
  .top .circulo2 {
    top: 25px;
    left: 190px;
  }
  .top .circulo3 {
    top: 105px;
    left: 105px;
  }
  .top .circulo4 {
    top: 190px;
    left: 25px;
  }
  .top .circulo5 {
    top: 190px;
    left: 190px;
  }
  .bottom .circulo1 {
    top: 25px;
    left: 25px;
  }
  .bottom .circulo2 {
    top: 25px;
    left: 190px;
  }
  .bottom .circulo3 {
    top: 105px;
    left: 25px;
  }
  .bottom .circulo4 {
    top: 105px;
    left: 190px;
  }
  .bottom .circulo5 {
    top: 190px;
    left: 25px;
  }
  .bottom .circulo6 {
    top: 190px;
    left: 190px;
  }

  .Square {
    width: 65px;
    height: 65px;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 10%;
    padding: 8px;
    display: grid;
    place-items: center;
    transition: 0.3s;
    position: relative;
  }
  .Square:hover {
    transform: scale(1.3);
    transition: 0.6s;
  }
  .dot {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 15px;
  }
  .front .dot1 {
    top: 25px;
    left: 25px;
  }
  .back .dot1 {
    top: 7px;
    left: 7px;
  }
  .back .dot2 {
    top: 40px;
    left: 40px;
  }
  .right .dot1 {
    top: 7px;
    left: 7px;
  }
  .right .dot2 {
    top: 25px;
    left: 25px;
  }
  .right .dot3 {
    top: 42px;
    left: 42px;
  }
  .left .dot1 {
    top: 7px;
    left: 7px;
  }
  .left .dot2 {
    top: 7px;
    left: 42px;
  }
  .left .dot3 {
    top: 42px;
    left: 7px;
  }
  .left .dot4 {
    top: 42px;
    left: 42px;
  }
  .top .dot1 {
    top: 7px;
    left: 7px;
  }
  .top .dot2 {
    top: 7px;
    left: 42px;
  }
  .top .dot3 {
    top: 25px;
    left: 25px;
  }
  .top .dot4 {
    top: 42px;
    left: 7px;
  }
  .top .dot5 {
    top: 42px;
    left: 42px;
  }
  .bottom .dot1 {
    top: 7px;
    left: 7px;
  }
  .bottom .dot2 {
    top: 7px;
    left: 42px;
  }
  .bottom .dot3 {
    top: 25px;
    left: 42px;
  }
  .bottom .dot4 {
    top: 25px;
    left: 7px;
  }
  .bottom .dot5 {
    top: 42px;
    left: 7px;
  }
  .bottom .dot6 {
    top: 42px;
    left: 42px;
  }
`;
