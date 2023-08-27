import { BiUpArrowAlt } from "react-icons/bi";
import { styled } from "styled-components";

export default function FooterComponent() {
  return (
    <Footer>
      <div className="cr-con">
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
  }
  a {
    position: absolute;
    color: white;
    font-size: x-large;
    right: 1.5rem;
    transition: 0.5s ease;
  }
`;
