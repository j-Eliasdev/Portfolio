import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 0% 10%;

  .sub-title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 50px;
    text-decoration: underline;
  }
  .col-symbols,
  .col-profesional {
    flex-basis: 45%;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(50px);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 15px;
  }

  .skill > span {
    display: block;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .skill .barra-skill {
    height: 8px;
    width: 100%;
    border-radius: 15px;
    background-color: #122543;
    position: relative;
    margin-bottom: 30px;
  }
  .skill .progreso {
    background-color: aqua;
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
  }
  .skill .barra-skill span {
    position: absolute;
    height: 40px;
    width: 40px;
    color: #131517;
    background-color: aqua;
    border-radius: 50px;
    line-height: 40px;
    text-align: center;
    top: -17px;
    right: -15px;
    font-size: 14px;
  }

  /* -----------------------------------BreakPonit---------------------------------------- */

  @media (max-width: 1400px) {
    justify-content: space-between;
    .col-symbols,
    .col-profesional {
      flex-basis: 450px;
    }
  }
  @media (max-width: 1130px) {
    display: grid;
    justify-content: center;
    padding: 20px 10%;
    .col-symbols,
    .col-profesional {
      width: 500px;
      margin-top: 50px;
    }
  }
  @media (max-width: 555px) {
    .col-symbols,
    .col-profesional {
      width: 350px;
    }
    .skill > span {
      font-size: 20px;
    }
    .skill .barra-skill span {
      height: 30px;
      width: 30px;
      line-height: 30px;
      top: -10px;
      right: -12px;
      font-size: 12px;
    }
  }
  @media (max-width: 390px) {
    .col-symbols,
    .col-profesional {
      width: 300px;
    }
  }

  // -----------------------------Animation------------------------------------------

  .react-symbol {
    animation: rotate 10s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .skill .javaScript {
    width: 0%;
    animation: 2s javaScript forwards;
  }
  @keyframes javaScript {
    0% {
      width: 0%;
    }
    100% {
      width: 70%;
    }
  }
  .skill .html {
    width: 0%;
    animation: 2s html forwards;
  }

  @keyframes html {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }
  .skill .css {
    width: 0%;
    animation: 2s css forwards;
  }

  @keyframes css {
    0% {
      width: 0%;
    }
    100% {
      width: 90%;
    }
  }
  .skill .react {
    width: 0%;
    animation: 2s react forwards;
  }

  @keyframes react {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }
  .skill .git {
    width: 0%;
    animation: 2s git forwards;
  }

  @keyframes git {
    0% {
      width: 0%;
    }
    100% {
      width: 75%;
    }
  }

  .skill .creactive {
    width: 0%;
    animation: 2s creactive forwards;
  }

  @keyframes creactive {
    0% {
      width: 0%;
    }
    100% {
      width: 75%;
    }
  }
  .skill .comunication {
    width: 0%;
    animation: 2s comunication forwards;
  }

  @keyframes comunication {
    0% {
      width: 0%;
    }
    100% {
      width: 85%;
    }
  }
  .skill .teamwork {
    width: 0%;
    animation: 2s teamwork forwards;
  }

  @keyframes teamwork {
    0% {
      width: 0%;
    }
    100% {
      width: 90%;
    }
  }
  .skill .resolution {
    width: 0%;
    animation: 2s resolution forwards;
  }

  @keyframes resolution {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }
  .skill .learn {
    width: 0%;
    animation: 2s learn forwards;
  }

  @keyframes learn {
    0% {
      width: 0%;
    }
    100% {
      width: 90%;
    }
  }
`;
