import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import BurgerComponent from "../burgerBottom";

export default function NavarComponent() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClose = () => {
    setClicked(false);
  };
  return (
    <Header>
      <Logo to="/">
        ELÍAS <span style={{ color: "aqua" }}>B.</span>
      </Logo>
      <NavComponent>
        <div className={`links ${clicked ? "active" : ""} `}>
          <a
            onClick={handleClose}
            href="#home"
            style={{ transitionDelay: "calc(.15s)" }}
          >
            Inicio
          </a>
          <a
            onClick={handleClose}
            href="#about"
            style={{ transitionDelay: "calc(.30s)" }}
          >
            Sobre Mi
          </a>
          <a
            onClick={handleClose}
            href="#skills"
            style={{ transitionDelay: "calc(.45s)" }}
          >
            Habilidades
          </a>
          <a
            onClick={handleClose}
            href="#projects"
            style={{ transitionDelay: "calc(.60s)" }}
          >
            Proyectos
          </a>
          <a
            onClick={handleClose}
            href="#contact"
            style={{ transitionDelay: "calc(.75s)" }}
          >
            Contacto
          </a>
        </div>
        <div className="burger">
          <BurgerComponent clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""} `}></BgDiv>
      </NavComponent>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(50px);
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.5s ease;
  }
  &:hover::after {
    left: 100%;
  }
  @media (max-width: 990px) {
    padding: 1.3rem 5%;
  }
  @media (max-width: 600px) {
    &::before {
      background-color: #13215E;
    }
  }
`;

const Logo = styled(Link)`
  font-size: 32px;
  color: white;
  text-decoration: none;
  font-weight: 700;
`;

const NavComponent = styled.nav`
  a {
    position: relative;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin-left: 40px;
    transition: 0.9s;
  }
  .links {
    position: initial;
    margin: 0;
    a {
      font-size: 18px;
    }

    @media (max-width: 770px) {
      position: absolute;
      top: -700px;
      left: -2000px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      a {
        display: block;
        margin: 1.5rem 0;
        font-size: 1.1rem;
        text-align: center;
        transform: translateY(-50px);
        transition: 0.3s ease;
        opacity: 0;
      }
    }
  }
  @media (max-width: 770px) {
    .links.active {
      width: 100%;
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      text-align: center;
      a {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  @media (min-width: 770px) {
    .burger {
      display: none;
    }
    a::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      height: 2px;
      width: 0;
      background-color: aqua;
      transition: 0.3s;
    }
    a:hover::before {
      width: 100%;
    }
  }
`;
const BgDiv = styled.div`
  @media (max-width: 770px) {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(50px);
    border-bottom-right-radius: 50px;
    box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.1);
    bottom: 10000px;
    left: 0;
    height: 17.7rem;
    z-index: -1;
    transition: 0.3s ease;

    &.active {
      bottom: -17.7rem;
      left: 0;
      width: 100%;
    }
    @media (max-width: 600px) {
      background-color: #13215E;
    }
  }
`;
