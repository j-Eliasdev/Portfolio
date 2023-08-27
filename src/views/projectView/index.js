import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaShareSquare } from "react-icons/fa";
import { Container } from "./components";
import ProTwitter from "../../assets/img/red-social.jpg";
import ProGestor from "../../assets/img/gestor.jpg";
import ProGame from "../../assets/img/game.png";

export default function ProjectView() {
  return (
    <Container>
      <h1 className="title">Proyectos</h1>
      {/* ---------------------------------------Proyecto 1-------------------------------------- */}
      <div className="cards">
        <div className="card">
          <img src={ProTwitter} alt="Imagen del proyecto clon twitter" />
          <div className="layer">
            <h2>Red social</h2>
            <p>
              Es una red social todo en uno que combina comunicación,
              entretenimiento y descubrimiento en una sola plataforma. (Clon de
              twitter, aun en desarrollo)
            </p>
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
          <div className="layer">
            <h2>Gestor de reservas</h2>
            <p>
              Aplicación de gestión de reservas que cambiará la forma en que las
              empresas gestionan sus citas y reservas.
            </p>

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
          <div className="layer">
            <h2>Juego 3 en rayas</h2>
            <p>
              Dos jugadores compiten por hacer una línea de tres fichas en un
              tablero de 3x3. (Desarrollado en las practicas del instituto)
            </p>
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
