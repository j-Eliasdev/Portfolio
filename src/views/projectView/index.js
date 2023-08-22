import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaShareSquare } from "react-icons/fa";
import { Card, Container, SciDiv } from "./components";
import Dev1 from "../../assets/img/dv1.jpg";
import Dev2 from "../../assets/img/dv2.jpeg";
import Dev3 from "../../assets/img/dv3.jpeg";

export default function ProjectView() {
  return (
    <Container>
      <h1 className="Title">Proyectos</h1>
      <Card>
        <img src={Dev1} alt="IMG 1" />
        <h3>Red social</h3>
        <p>
          Creado mediantes practicas autodidacto, perfecto para ser una app
          funcional. Clon de twitter
        </p>
        <div>
          <SciDiv>
            <a href="https://www.linkedin.com/in/jose-el%C3%ADas-batista-rosario-525271246/">
              <FaShareSquare />
            </a>

            <a href="https://github.com/j-Eliasdev">
              <GrGithub />
            </a>
          </SciDiv>
        </div>
      </Card>
      <Card>
        <img src={Dev2} alt="img 2" />

        <h3>Gestor de reservas</h3>
        <p>
          Demostracion de una app, donde puede registrarte a determinados
          sectores donde se pueda aplicar.
        </p>
        <div>
          <SciDiv>
            <a href="https://www.linkedin.com/in/jose-el%C3%ADas-batista-rosario-525271246/">
              <FaShareSquare />
            </a>

            <a href="https://github.com/j-Eliasdev">
              <GrGithub />
            </a>
          </SciDiv>
        </div>
      </Card>

      <Card>
        <img src={Dev3} alt="img3" />
        <h3>Juego 3 en rayas</h3>
        <p>
          Mi proyecto favorito mientras hacia mis estudios
        </p>
        <div>
          <SciDiv>
            <a href="https://www.linkedin.com/in/jose-el%C3%ADas-batista-rosario-525271246/">
              <FaShareSquare />
            </a>

            <a href="https://github.com/j-Eliasdev">
              <GrGithub />
            </a>
          </SciDiv>
        </div>
      </Card>
    </Container>
  );
}
