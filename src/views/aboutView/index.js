import React from "react";
import { Container } from "./components";
import { BsFillCalendarFill } from "react-icons/bs";
import EliasImg from "../../assets/img/elias.png";

export default function AboutMe() {
  return (
    <Container>
      {/* Columna izquierda contiene la imagen */}
      <div className="about-col-1">
        <img className="img-me" src={EliasImg} alt="Elias" />
      </div>

      {/* Columna derecha */}
      <div className="about-col-2">
        {/* Descripción sobre mi */}
        <h1 className="title">Sobre mi</h1>
        <p>
          {" "}
          Programador web con mas de 1 año de trayectoria desarrollando apps. A
          lo largo de este año, he obtenido un gran conocimiento en el
          desarrollo del Front-End de las aplicaciones web. Busco ampliar mis
          conocimientos y capacidad creativa al siguiente nivel, aportando mis
          conocimientos en React, JavaScript, Bootstrap, entre otros.
        </p>

        {/* Bloque de experiencia y estudios  */}
        <div className="tab-experience">
          {/* Columna izquierda experiencia */}
          <div className="col-exp-left">
            <h3 className="sub-title">Experiencia</h3>
            <div>
              <div className="litle-card">
                <h3>
                  <BsFillCalendarFill className="icons-calendar" />
                  Mar. 2022 - Jun. 2023
                </h3>
                <h5>Xarketing - Agencia De Servicios Digitales.</h5>
                <p>
                  Desarrollador Front-End <br />{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    Olot, Girona
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Columna derecha Estudios */}
          <div className="col-exp-right">
            <h3 className="sub-title">Educación</h3>
            <div className="derecha">
              <div className="litle-card">
                <h3>
                  <BsFillCalendarFill className="icons-calendar" />
                  sept. 2019 - may. 2020
                </h3>
                <h5> GRADO SUPERIOR INSTITUTO BOSC DE LA COMA.</h5>
                <p>Administración de sistemas en redes (ASIX 1).</p>
                <span style={{ fontWeight: "bold" }}>Olot, Girona</span>
              </div>
              <div className="litle-card">
                <h3>
                  <BsFillCalendarFill className="icons-calendar" />
                  sept. 2020 - may. 2021
                </h3>
                <h5> GRADO SUPERIOR INSTITUTO BOSC DE LA COMA.</h5>
                <p>Desarrollador de aplicaciones web (DAW 2).</p>
                <span style={{ fontWeight: "bold" }}>Olot, Girona</span>
              </div>
              <div className="litle-card">
                <h3>
                  <BsFillCalendarFill className="icons-calendar" />
                  sept. 2021 - may. 2022
                </h3>
                <h5> GRADO SUPERIOR INSTITUTO BOSC DE LA COMA.</h5>
                <p>
                  Desarrollador de aplicaciones multiplataforma (DAM 2).
                </p>{" "}
                <span style={{ fontWeight: "bold" }}>Olot, Girona</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
