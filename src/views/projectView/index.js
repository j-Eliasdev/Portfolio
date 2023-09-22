import React from "react";
import {
  ReactTec,
  JavaScriptTec,
  TailWindTec,
  CssTec,
} from "../../components/icons";
import { GrGithub } from "react-icons/gr";
import { FaShareSquare } from "react-icons/fa";
import { Container, Card } from "./components";
import ProGestor from "../../assets/img/gestor.jpg";
import ProGame from "../../assets/img/game.png";
import Atropos from "atropos/react";

export default function ProjectView() {
  return (
    <Container>
      <h1 className="title">Proyectos</h1>
      {/* ---------------------------------------Proyecto 1-------------------------------------- */}
      <div className="cards">
        <Atropos shadow={false} highlight={0} className="atropos">
          <Card>
            <div className="card-img">
              <img
                src={ProGestor}
                alt="Imagen del proyecto juego"
                data-atropos-offset="5"
              />
            </div>
            <div className="card-info">
              <h1>Gestor de reservas</h1>
              <p>
                Aplicación de gestión de reservas que cambiará la forma en que
                las empresas gestionan sus citas y reservas.
              </p>
              <div className="icon-svg">
                <h3>Tecnologías</h3>
                <ReactTec />
                <TailWindTec />
                <JavaScriptTec />
              </div>
              <div className="card-sci">
                <a href="https://gestor-reservas-seven.vercel.app/">
                  <FaShareSquare />
                </a>
                <a href="https://github.com/j-Eliasdev/gestor-reservas">
                  <GrGithub />
                </a>
              </div>
            </div>
          </Card>
        </Atropos>

        <Atropos shadow={false} highlight={0} className="atropos">
          <Card>
            <div className="card-img">
              <img
                src={ProGame}
                alt="Imagen del proyecto juego"
                data-atropos-offset="5"
              />
            </div>
            <div className="card-info">
              <h1>Juego 3 en rayas</h1>
              <p>
                Dos jugadores compiten por hacer una línea de tres fichas en un
                tablero de 3x3. (Desarrollado en las practicas del instituto)
              </p>
              <div className="icon-svg">
                <h3>Tecnologias</h3>
                <ReactTec />
                <CssTec />
                <JavaScriptTec />
              </div>
              <div className="card-sci">
                <a href="https://game-3-en-raya.up.railway.app/">
                  <FaShareSquare />
                </a>
                <a href="https://github.com/j-Eliasdev/game-3-en-raya">
                  <GrGithub />
                </a>
              </div>
            </div>
          </Card>
        </Atropos>
      </div>
    </Container>
  );
}
