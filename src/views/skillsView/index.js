import React from "react";
import { Container } from "./components";
import { Reactjs, Js, Github } from "@react-symbols/icons";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

export default function SkillsView() {
  return (
    <Container>
      <div className="rater">
      <h2 className="sub-title">Habilidades en código</h2>
        <div className="skill">
          <AiFillHtml5 style={{ color: "orangered", fontSize: "30px" }} />
          <div className="barra-skill">
            <div className="progreso html">
              <span>80%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <DiCss3 style={{color: 'skyblue', fontSize: '30px'}} />
          <div className="barra-skill">
            <div className="progreso css">
              <span>90%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <Js width={40} height={40} />
          <div className="barra-skill ">
            <div className="progreso javaScript">
              <span>70%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <Reactjs className="react-symbol" width={40} height={40} />
          <div className="barra-skill">
            <div className="progreso react">
              <span>80%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <Github width={40} height={40} />

          <div className="barra-skill">
            <div className="progreso git">
              <span>75%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="symbols">
      <h2 className="sub-title">Habilidades profesionales</h2>
        <div className="skill">
          <span>Creatividad</span>

          <div className="barra-skill">
            <div className="progreso creactivo">
              <span>75%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <span>Comunicación efectiva</span>

          <div className="barra-skill">
            <div className="progreso comunicacion">
              <span>85%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <span>Trabajo en equipo</span>
          <div className="barra-skill">
            <div className="progreso teamwork">
              <span>90%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <span>Resolición de problemas</span>
          <div className="barra-skill">
            <div className="progreso resolving">
              <span>80%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <span>Aprendizaje fluido</span>
          <div className="barra-skill">
            <div className="progreso aprendizaje">
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
