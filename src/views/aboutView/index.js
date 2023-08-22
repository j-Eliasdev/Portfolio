import React from "react";
import { Container } from "./components";
import { BsFillCalendarFill } from "react-icons/bs";
import EliasImg from "../../assets/img/elias.png";

export default function AboutMe() {
  return (
    <Container>
      {/* Div imagen de perfil */}
      <div className="about-col-1">
        <img src={EliasImg} alt="elias" />
      </div>

      {/* div descripcion sobre mi */}
      <div className="about-col-2">
        <h1 className="sub-title">Sobre mi</h1>
        <p className="descripcion">
          {" "}
          Programador web con mas de 1 año de trayectoria desarrollando apps. A
          lo largo de este año, he obtenido un gran conocimiento en el
          desarrollo del Front-End de las aplicaciones web. Busco ampliar mis
          conocimientos y capacidad creativa al siguiente nivel, aportando mis
          conocimientos en React, JavaScript, Bootstrap, entre otros.
        </p>

        {/* Bloque de experiencia y estudios  */}
        <div className="tab-experience">
          {/* experiencia */}
          <div className="col-left">
            <h3>Experiencia</h3>
            <div>
              <div className="div-education">
                <h3>
                  <BsFillCalendarFill className="icons" />
                  Mar. 2022 - Jun. 2023
                </h3>
                <p>
                  Desarrollador front-end en Xarketing - Agencia De Servicios
                  Digitales. <br />{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    Olot, Girona
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Estudios */}
          <div className="col-right">
            <h3 className="tab-links">Educación</h3>
            <div className="derecha">
              <div className="div-education">
                <h3>
                  <BsFillCalendarFill className="icons" />
                  sept. 2019 - may. 2020
                </h3>
                <h5> GRADO SUPERIOR INSTITUTO BOSC DE LA COMA.</h5>
                <p>Administración de sistemas en redes (ASIX 1).</p>
                <span style={{ fontWeight: "bold" }}>Olot, Girona</span>
                {/* <div className="conectord">
                  <div className="circulod"></div>
                </div> */}
              </div>
              <div className="div-education">
                <h3>
                  <BsFillCalendarFill className="icons" />
                  sept. 2020 - may. 2021
                </h3>
                <h5> GRADO SUPERIOR INSTITUTO BOSC DE LA COMA.</h5>
                <p>Desarrollador de aplicaciones web (DAW 2).</p>
                <span style={{ fontWeight: "bold" }}>Olot, Girona</span>
                {/* <div className="conectord">
                  <div className="circulod"></div>
                </div> */}
              </div>
              <div className="div-education">
                <h3>
                  <BsFillCalendarFill className="icons" />
                  sept. 2021 - may. 2022
                </h3>
                <h5> GRADO SUPERIOR INSTITUTO BOSC DE LA COMA.</h5>
                <p>
                  Desarrollador de aplicaciones multiplataforma (DAM 2).
                </p>{" "}
                <span style={{ fontWeight: "bold" }}>Olot, Girona</span>
                {/* <div className="conectord">
                  <div className="circulod"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
