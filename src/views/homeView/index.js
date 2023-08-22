import React from "react";
import AboutMe from "../aboutView";
import SkillsView from "../skillsView";
import ProjectView from "../projectView";
import ContactView from "../contactView";
import { Typewriter } from "react-simple-typewriter";
import Programer from "../../assets/img/programmer.png"

function HomeView() {
  return (
    <main>
      <section id="home" className="Home">
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
          <img style={{width: "500px"}} src={Programer} alt="programmer" />
        </div>
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <SkillsView />
      </section>

      <section id="projects">
        <ProjectView />
      </section>

      <section id="contact">
        <ContactView />
      </section>
    </main>
  );
}

export default HomeView;
