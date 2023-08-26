import React from "react";
import HomeView from "../homeView";
import AboutMe from "../aboutView";
import SkillsView from "../skillsView";
import ProjectView from "../projectView";
import ContactView from "../contactView";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function LandingPage() {
  return (
    <main>
      <section id="home">
        <AnimationOnScroll animateIn="animate__slideInRight">
          <HomeView />
        </AnimationOnScroll>
      </section>
      <section id="about">
        <AnimationOnScroll animateIn="animate__fadeIn ">
          <AboutMe />
        </AnimationOnScroll>
      </section>

      <section id="skills">
        <AnimationOnScroll animateIn="animate__slideInLeft">
          <SkillsView />
        </AnimationOnScroll>
      </section>

      <section id="projects">
        <AnimationOnScroll animateIn="animate__fadeIn">
          <ProjectView />
        </AnimationOnScroll>
      </section>

      <section id="contact">
        <AnimationOnScroll animateIn="animate__slideInRight" >
          <ContactView />
        </AnimationOnScroll>
      </section>
    </main>
  );
}

export default LandingPage;
