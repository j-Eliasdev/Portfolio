import React from "react";
import { Container } from "./components";
import {
  GrLinkedinOption,
  GrInstagram,
  GrGithub,
  GrMail,
} from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import PDFCV from '../../assets/img/my-cv.pdf'

export default function ContactView() {
  return (
    <Container>
      <div className="col-left">
        <h1 className="sub-title">Contact me</h1>
        <p>
          <GrMail className="icons" />
          elias013dr@gmail.com
        </p>
        <p>
          <BsFillTelephoneFill className="icons" />
          653 14 32 17
        </p>
        <div className="contact-sci">
          <a href="https://www.linkedin.com/in/jose-el%C3%ADas-batista-rosario-525271246/">
            <GrLinkedinOption />
          </a>
          <a href="#a">
            <GrInstagram />
          </a>
          <a href="https://github.com/j-Eliasdev">
            <GrGithub />
          </a>
        </div>

        <div className="btn-box">
          <a href={PDFCV} download>
            Download CV
          </a>
        </div>
      </div>
      <div className="col-right">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Your email" required />
          <textarea name="Message" rows="6" placeholder="Your Message" />
          <button type="submit" className="btn-form">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}
