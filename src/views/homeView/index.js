import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Programer from "../../assets/img/programmer.png";
import { Container } from "./components";

function HomeView() {
  return (
    <Container>
      <div className="home-content col-left">
        <h1>José Elías Batista Rosario</h1>
        <h3>
          <Typewriter
            words={[
              "Desarrollador De Aplicaciones",
              "Programador Frontend",
              "Software Developer",
              "Front-End Developer",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
      </div>
      <div className="col-right">
        <img
          className="img-landing"
          src={Programer}
          alt="programmer"
        />
      </div>
    </Container>
  );
}

export default HomeView;
