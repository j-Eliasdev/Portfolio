import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  padding: 0% 10%;


  .sub-title{
    text-align: center;
    font-weight: bold;
    margin-bottom: 50px;
    text-decoration: underline
  }
  .symbols {
    flex-basis: 35%;
  
  }
  .type-skills {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 15px;
  }
  .rater {
    flex-basis: 35%;
  }

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
/* ---------------- */
  .skill .creactivo {
    width: 0%;
    animation: 2s creactivo forwards;
  }

  @keyframes creactivo {
    0% {
      width: 0%;
    }
    100% {
      width: 75%;
    }
  }
  .skill .comunicacion {
    width: 0%;
    animation: 2s comunicacion forwards;
  }

  @keyframes comunicacion {
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
  .skill .resolving {
    width: 0%;
    animation: 2s resolving forwards;
  }

  @keyframes resolving {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }
  .skill .aprendizaje {
    width: 0%;
    animation: 2s aprendizaje forwards;
  }

  @keyframes aprendizaje {
    0% {
      width: 0%;
    }
    100% {
      width: 90%;
    }
  }
`;
