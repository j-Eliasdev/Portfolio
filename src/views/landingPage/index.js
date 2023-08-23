import React from "react";
import HomeView from "../homeView";
import AboutMe from "../aboutView";
import SkillsView from "../skillsView";
import ProjectView from "../projectView";
import ContactView from "../contactView";

function LandingPage() {
  return (
    <main>
      <section id="home">
        <HomeView />
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

export default LandingPage;
