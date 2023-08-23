import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavarComponent() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        ELÍAS <span style={{ color: "aqua" }}>B.</span>
      </Link>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <FiMenu id="menu-icon" />
        <AiOutlineClose id="close-icon" />
      </label>
      <nav className="navbar">
        <a href="#home" style={{ transitionDelay: "calc(.15s)" }}>
          {" "}
          Inicio
        </a>
        <a href="#about" style={{ transitionDelay: "calc(.30s)" }}>
          Sobre Mi
        </a>
        <a href="#skills" style={{ transitionDelay: "calc(.45s)" }}>
          Habilidades
        </a>
        <a href="#projects" style={{ transitionDelay: "calc(.60s)" }}>
          Projectos
        </a>
        <a href="#contact" style={{ transitionDelay: "calc(.75s)" }}>
          Contacto
        </a>
      </nav>
    </header>
  );
}
