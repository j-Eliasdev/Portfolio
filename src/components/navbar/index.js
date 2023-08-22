import React from "react";
import { Link } from "react-router-dom";

export default function NavarComponent() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        ELÍAS <span style={{color: "aqua"}}>B.</span>
      </Link>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
