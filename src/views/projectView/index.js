import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaShareSquare } from "react-icons/fa";
import { Container } from "./components";
import ProTwitter from "../../assets/img/dv1.jpg";
import ProGestor from "../../assets/img/dv2.jpeg";
import ProGame from "../../assets/img/dv3.jpeg";

export default function ProjectView() {
  return (
    <Container>
      <h1 className="title">Proyectos</h1>
      {/* ---------------------------------------Proyecto 1-------------------------------------- */}
      <div className="cards">
        <div className="card">
          <img src={ProTwitter} alt="Imagen del proyecto clon twitter" />
          <h2>Red social</h2>
          <p>
            Creado mediantes practicas autodidacto, perfecto para ser una app
            funcional. Clon de twitter
          </p>
          <div>
            <div className="card-sci">
              <a href="https://www.linkedin.com/in/jose-el%C3%ADas-batista-rosario-525271246/">
                <FaShareSquare />
              </a>

              <a href="https://github.com/j-Eliasdev">
                <GrGithub />
              </a>
            </div>
          </div>
        </div>

        {/* ---------------------------------------Proyecto 2-------------------------------------- */}
        <div className="card">
          <img src={ProGestor} alt="Imagen del proyecto Gestor" />

          <h2>Gestor de reservas</h2>
          <p>
            Demostracion de una app, donde puede registrarte a determinados
            sectores donde se pueda aplicar.
          </p>
          <div>
            <div className="card-sci">
              <a href="https://www.linkedin.com/in/jose-el%C3%ADas-batista-rosario-525271246/">
                <FaShareSquare />
              </a>
              <a href="https://github.com/j-Eliasdev">
                <GrGithub />
              </a>
            </div>
          </div>
        </div>

        {/* ---------------------------------------Proyecto 3-------------------------------------- */}
        <div className="card">
          <img src={ProGame} alt="Imagen del proyecto juego" />
          <h2>Juego 3 en rayas</h2>
          <p>Mi proyecto favorito mientras hacia mis estudios</p>
          <div>
            <div className="card-sci">
              <a href="https://www.linkedin.com/in/jose-el%C3%ADas-batista-rosario-525271246/">
                <FaShareSquare />
              </a>
              <a href="https://github.com/j-Eliasdev">
                <GrGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
