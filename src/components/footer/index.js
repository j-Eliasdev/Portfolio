import { BiUpArrowAlt } from "react-icons/bi";
import { styled } from "styled-components";

export default function FooterComponent() {
  return (
    <Footer>
      <div className="cr-con">
        <p>Si puedes pensarlo, puedes programarlo ✨</p>
        Copyright &copy; 2023 | Made by JBatistaDev
        <a href="#home">
          {" "}
          <BiUpArrowAlt />
        </a>
      </div>
    </Footer>
  );
}

const Footer = styled.footer`
  .cr-con {
    position: relative;
    background-color: #122543;
    color: white;
    padding: 1rem 4rem;
    text-align: center;
    border-top: 1px solid white;
  }
  a {
    position: absolute;
    color: white;
    font-size: x-large;
    right: 1.5rem;
    transition: 0.5s ease;
  }

  p{
    position: absolute;
    left: 1.5rem;
    font-weight: bold;
  }
  @media (max-width: 960px) {
    p{
      position:sticky;
    }
  }

`;
